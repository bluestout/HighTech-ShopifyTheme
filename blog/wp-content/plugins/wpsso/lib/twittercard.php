<?php
/**
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl.txt
 * Copyright 2012-2018 Jean-Sebastien Morisset (https://wpsso.com/)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'These aren\'t the droids you\'re looking for...' );
}

if ( ! class_exists( 'WpssoTwitterCard' ) ) {

	class WpssoTwitterCard {

		private $p;

		public function __construct( &$plugin ) {
			$this->p =& $plugin;

			if ( $this->p->debug->enabled ) {
				$this->p->debug->mark();
			}

			$this->p->util->add_plugin_filters( $this, array( 
				'plugin_image_sizes' => 1,
			) );
		}

		public function filter_plugin_image_sizes( $sizes ) {

			$sizes['tc_sum_img'] = array(		// options prefix
				'name' => 'tc-summary',		// wpsso-tc-summary
				'label' => _x( 'Twitter Summary Card',
					'image size label', 'wpsso' ),
			);

			$sizes['tc_lrg_img'] = array(		// options prefix
				'name' => 'tc-lrgimg',		// wpsso-tc-lrgimg
				'label' => _x( 'Twitter Large Image Card',
					'image size label', 'wpsso' ),
			);

			return $sizes;
		}

		/**
		 * Use reference for $mt_og argument to allow unset of existing twitter meta tags.
		 */
		public function get_array( array &$mod, array &$mt_og, $crawler_name = false ) {

			if ( false === $crawler_name ) {
				$crawler_name = SucomUtil::get_crawler_name();
			}

			if ( ! empty( $this->p->avail['*']['vary_ua'] ) ) {
				switch ( $crawler_name ) {
					case 'pinterest':
						return array();
				}
			}

			if ( $this->p->debug->enabled ) {
				$this->p->debug->mark();
			}

			$max = $this->p->util->get_max_nums( $mod );
			$post_id = $mod['is_post'] ? $mod['id'] : false;

			/**
			 * Read and unset pre-defined twitter card values in the open graph meta tag array.
			 */
			$mt_tc = SucomUtil::preg_grep_keys( '/^twitter:/', $mt_og, false, false, true );
			$mt_tc = apply_filters( $this->p->lca . '_tc_seed', $mt_tc, $mod );

			/**
			 * The twitter:domain is used in place of the 'view on web' text.
			 */
			if ( ! isset( $mt_tc['twitter:domain'] ) && ! empty( $mt_og['og:url'] ) ) {
				$mt_tc['twitter:domain'] = preg_replace( '/^.*\/\/([^\/]+).*$/', '$1', $mt_og['og:url'] );
			}

			if ( ! isset( $mt_tc['twitter:site'] ) ) {
				$mt_tc['twitter:site'] = SucomUtil::get_key_value( 'tc_site', $this->p->options, $mod );
			}

			if ( ! isset( $mt_tc['twitter:title'] ) ) {
				$mt_tc['twitter:title'] = $this->p->page->get_title( 70, '...', $mod, true, false, true, 'og_title' );
			}

			if ( ! isset( $mt_tc['twitter:description'] ) ) {
				if ( $this->p->debug->enabled ) {
					$this->p->debug->log( 'getting description for twitter:description meta tag' );
				}
				$mt_tc['twitter:description'] = $this->p->page->get_description( $this->p->options['tc_desc_len'], 
					'...', $mod, true, true, true, 'tc_desc' );	// $add_hashtags is true.
			}

			if ( ! isset( $mt_tc['twitter:creator'] ) ) {
				if ( $mod['is_post'] ) {
					if ( $mod['post_author'] ) {
						$mt_tc['twitter:creator'] = get_the_author_meta( $this->p->options['plugin_cm_twitter_name'], $mod['post_author'] );
					}
				} elseif ( $mod['is_user'] ) {
					$mt_tc['twitter:creator'] = get_the_author_meta( $this->p->options['plugin_cm_twitter_name'], $mod['id'] );
				}
			}

			/**
			 * Player Card
			 *
			 * The twitter:player:stream meta tags are used for self-hosted MP4 videos. The videos provided by
			 * YouTube, Vimeo, Wistia, etc. are application/x-shockwave-flash or text/html.
			 *
			 * twitter:player:stream
			 * 	This is a URL to the video file itself (not a video embed). The video must be an mp4 file. The
			 * 	supported codecs within the file are: H.264 video, Baseline Profile Level 3.0, up to 640 x 480 at
			 * 	30 fps and AAC Low Complexity Profile (LC) audio. This property is optional.
			 *
			 * twitter:player:stream:content_type
			 *	The MIME type for your video file (video/mp4). This property is only required if you have set a
			 *	twitter:player:stream meta tag.
			 */
			if ( ! isset( $mt_tc['twitter:card'] ) ) {

				if ( isset( $mt_og['og:video'] ) && count( $mt_og['og:video'] ) > 0 ) {

					foreach ( $mt_og['og:video'] as $og_video ) {

						$player_embed_url = '';
						$player_stream_url = '';

						/**
						 * Check for internal meta tag values.
						 */
						if ( ! empty( $og_video['og:video:embed_url'] ) ) {
							$player_embed_url = $og_video['og:video:embed_url'];
							if ( $this->p->debug->enabled ) {
								$this->p->debug->log( 'player card: embed url = ' . $player_embed_url );
							}
						}

						if ( ! empty( $og_video['og:video:stream_url'] ) ) {
							$player_stream_url = $og_video['og:video:stream_url'];
							if ( $this->p->debug->enabled ) {
								$this->p->debug->log( 'player card: stream url = ' . $player_stream_url );
							}
						}

						/**
						 * Check for mime-type meta tag values.
						 */
						if ( isset( $og_video['og:video:type'] ) ) {

							switch ( $og_video['og:video:type'] ) {

								/**
								 * twitter:player
								 *
								 * HTTPS URL to iFrame player. This must be a HTTPS URL which does not generate active 
								 * mixed content warnings in a web browser. The audio or video player must not require
								 * plugins such as Adobe Flash.
								 */
								case 'text/html':

									if ( empty( $player_embed_url ) ) {
										$player_embed_url = SucomUtil::get_mt_media_url( $og_video, 'og:video' );
										if ( $this->p->debug->enabled ) {
											$this->p->debug->log( 'player card: ' . $og_video['og:video:type'] .
												' url = ' . $player_embed_url );
										}
									}

									break;

								/**
								 * twitter:player:stream
								 */
								case 'video/mp4':

									if ( empty( $player_stream_url ) ) {
										$player_stream_url = SucomUtil::get_mt_media_url( $og_video, 'og:video' );
										if ( $this->p->debug->enabled ) {
											$this->p->debug->log( 'player card: ' . $og_video['og:video:type'] .
												' url = ' . $player_stream_url );
										}
									}

									break;

								default:

									if ( $this->p->debug->enabled ) {
										$this->p->debug->log( 'player card: video type "' .
											$og_video['og:video:type'] . '" is unknown' );
									}

									break;
							}
						}

						/**
						 * Set the twitter:player meta tag value(s).
						 */
						if ( ! empty( $player_embed_url ) ) {
							$mt_tc['twitter:card'] = 'player';
							$mt_tc['twitter:player'] = $player_embed_url;
						}

						if ( ! empty( $player_stream_url ) ) {
							$mt_tc['twitter:card'] = 'player';
							if ( empty( $mt_tc['twitter:player'] ) ) {
								$mt_tc['twitter:player'] = $player_stream_url;	// Fallback to video/mp4.
							}
							$mt_tc['twitter:player:stream'] = $player_stream_url;
							$mt_tc['twitter:player:stream:content_type'] = $og_video['og:video:type'];
						}

						/**
						 * Set twitter:player related values (player width, height, mobile apps, etc.)
						 */
						if ( ! empty( $mt_tc['twitter:card'] ) ) {

							foreach ( array(
								'og:video:width' => 'twitter:player:width',
								'og:video:height' => 'twitter:player:height',
								'og:video:iphone_name' => 'twitter:app:name:iphone',
								'og:video:iphone_id' => 'twitter:app:id:iphone',
								'og:video:iphone_url' => 'twitter:app:url:iphone',
								'og:video:ipad_name' => 'twitter:app:name:ipad',
								'og:video:ipad_id' => 'twitter:app:id:ipad',
								'og:video:ipad_url' => 'twitter:app:url:ipad',
								'og:video:googleplay_name' => 'twitter:app:name:googleplay',
								'og:video:googleplay_id' => 'twitter:app:id:googleplay',
								'og:video:googleplay_url' => 'twitter:app:url:googleplay',
							) as $og_name => $tc_name ) {
								if ( ! empty( $og_video[$og_name] ) ) {
									$mt_tc[$tc_name] = $og_video[$og_name];
								}
							}

							/**
							 * Get the video preview image (if one is available).
							 */
							$mt_tc['twitter:image'] = SucomUtil::get_mt_media_url( $og_video, 'og:image' );

							/**
							 * Fallback to the open graph image.
							 */
							if ( empty( $mt_tc['twitter:image'] ) && ! empty( $mt_og['og:image'] ) ) {
								if ( $this->p->debug->enabled ) {
									$this->p->debug->log( 'player card: no video image - using og:image instead' );
								}
								$mt_tc['twitter:image'] = SucomUtil::get_mt_media_url( $mt_og['og:image'], 'og:image' );
							}
						}

						break;	// Use only the first video.
					}

				} elseif ( $this->p->debug->enabled ) {
					$this->p->debug->log( 'player card: no videos found' );
				}
			}

			/**
			 * All image cards.
			 */
			if ( ! isset( $mt_tc['twitter:card'] ) && ! empty( $max['og_img_max'] ) ) {

				/**
				 * Default image for archive.
				 */
				if ( ! isset( $mt_tc['twitter:card'] ) && ! $mod['use_post'] ) {

					list( $card_type, $size_name ) = $this->get_card_type_size( 'default' );

					if ( $this->p->debug->enabled ) {
						$this->p->debug->log( 'use_post is false: checking for forced default image' );
					}

					if ( $this->p->util->force_default_image( $mod, 'og' ) ) {
						if ( $this->p->debug->enabled ) {
							$this->p->debug->log( $card_type . ' card: getting default image' );
						}

						$og_images = $this->p->media->get_default_images( 1, $size_name );

						if ( count( $og_images ) > 0 ) {
							$og_single_image = reset( $og_images );
							$mt_tc['twitter:card'] = $card_type;
							$mt_tc['twitter:image'] = $og_single_image['og:image'];
						} elseif ( $this->p->debug->enabled )
							$this->p->debug->log( 'no default image returned' );

						$post_id = false;	// Skip additional image checks.

					} elseif ( $this->p->debug->enabled ) {
						$this->p->debug->log( $card_type . ' card: no forced default image' );
					}
				}

				if ( ! empty( $post_id ) ) {

					list( $card_type, $size_name ) = $this->get_card_type_size( 'post' );

					/**
					 * Post meta image.
					 */
					if ( ! isset( $mt_tc['twitter:card'] ) ) {
						if ( $this->p->debug->enabled ) {
							$this->p->debug->log( $card_type . ' card: getting post image (meta, featured, attached)' );
						}

						$og_images = $this->p->media->get_post_images( 1, $size_name, $post_id, false );

						if ( count( $og_images ) > 0 ) {
							$og_single_image = reset( $og_images );
							$mt_tc['twitter:card'] = $card_type;
							$mt_tc['twitter:image'] = $og_single_image['og:image'];
						} elseif ( $this->p->debug->enabled ) {
							$this->p->debug->log( 'no post image returned' );
						}
					}

					/**
					 * Singlepic shortcode image.
					 */
					if ( ! isset( $mt_tc['twitter:card'] ) ) {

						if ( ! empty( $this->p->avail['media']['ngg'] ) ) {

							if ( ! empty( $this->p->m['media']['ngg'] ) ) {

								if ( $this->p->debug->enabled ) {
									$this->p->debug->log( $card_type . ' card: checking for singlepic image' );
								}
	
								$num_diff = 1;
								$ngg_obj =& $this->p->m['media']['ngg'];

								$og_images = $ngg_obj->get_singlepic_og_images( $num_diff, $size_name, $post_id, false );
	
								if ( ! empty( $og_images ) ) {

									$og_single_image = reset( $og_images );
									$mt_tc['twitter:card'] = $card_type;
									$mt_tc['twitter:image'] = $og_single_image['og:image'];

								} elseif ( $this->p->debug->enabled ) {
									$this->p->debug->log( $card_type . ' card: ngg singlepic image not found' );
								}
							} elseif ( $this->p->debug->enabled ) {
								$this->p->debug->log( $card_type . ' card: ngg not defined - singlepic image skipped' );
							}
						} elseif ( $this->p->debug->enabled ) {
							$this->p->debug->log( $card_type . ' card: ngg not available - singlepic image skipped' );
						}
					}
				} elseif ( $this->p->debug->enabled ) {
					$this->p->debug->log( 'empty post_id: skipped post images' );
				}
			} elseif ( $this->p->debug->enabled ) {
				$this->p->debug->log( 'images disabled: maximum images = 0' );
			}

			/**
			 * Summary Card (default).
			 */
			if ( ! isset( $mt_tc['twitter:card'] ) ) {

				list( $card_type, $size_name ) = $this->get_card_type_size( 'default' );

				if ( $this->p->debug->enabled ) {
					$this->p->debug->log( $card_type . ' card: using default card type' );
				}

				$mt_tc['twitter:card'] = $card_type;

				if ( ! empty( $max['og_img_max'] ) ) {
					if ( $this->p->debug->enabled ) {
						$this->p->debug->log( $card_type . ' card: checking for content image' );
					}

					$og_images = $this->p->og->get_all_images( 1, $size_name, $mod, false );

					if ( count( $og_images ) > 0 ) {
						$og_single_image = reset( $og_images );
						$mt_tc['twitter:image'] = $og_single_image['og:image'];
					} elseif ( $this->p->debug->enabled ) {
						$this->p->debug->log( 'no content image returned' );
					}
				}
			}

			if ( $this->p->debug->enabled ) {
				if ( ! empty( $mt_tc['twitter:image'] ) ) {
					$this->p->debug->log( $mt_tc['twitter:card'] . ' card: image ' . $mt_tc['twitter:image'] );
				} else {
					$this->p->debug->log( $mt_tc['twitter:card'] . ' card: no image defined' );
				}
			}

			return (array) apply_filters( $this->p->lca . '_tc', $mt_tc, $mod );
		}

		public function get_card_type_size( $opt_suffix ) {

			$card_type = isset( $this->p->options['tc_type_' . $opt_suffix] ) ?
				$this->p->options['tc_type_' . $opt_suffix] : 'summary';

			switch ( $card_type ) {
				case 'summary_large_image':
					$size_name = $this->p->lca . '-tc-lrgimg';
					break;
				case 'summary':
				default:
					$size_name = $this->p->lca . '-tc-summary';
					break;
			}

			return array( $card_type, $size_name );
		}
	}
}
