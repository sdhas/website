$(document)
		.ready(
				function() {
					// Initialize Tooltip
					$('[data-toggle="tooltip"]').tooltip();

					// Add smooth scrolling to all links in navbar + footer link
					$(".navbar a, footer a[href='#myPage']").on('click',
							function(event) {

								// Make sure this.hash has a value before
								// overriding default behavior
								if (this.hash !== "") {

									// Prevent default anchor click behavior
									event.preventDefault();

									// Store hash
									var hash = this.hash;

									// Using jQuery's animate() method to add
									// smooth page scroll
									// The optional number (900) specifies the
									// number of milliseconds it takes to scroll
									// to the specified area
									$('html, body').animate({
										scrollTop : $(hash).offset().top
									}, 900, function() {

										// Add hash (#) to URL when done
										// scrolling (default click behavior)
										window.location.hash = hash;
									});
								} // End if
							});

					// Mailing comments
					$('#send_email').click(
							function() {
								$('#comments_form').attr(
										'action',
										'mailto:marlencinemas@gmail.com?subject=[Marlencinemas] Comments from '
												+ $('#name').val()
												+ '&body= Email : >> '
												+ $('#email').val()
												+ ' >> Comments'
												+ $('#comments').val());
								$('#comments_form').submit();
							});

					test();
					function test() {
//						var movies = [
//							{
//							    "title": "Traffic Ramasamy",
//							    "language": "Tamil",
//							    "image": "images/movies/Traffic Ramasamy.jpg",
//							    "theater": "sk",
//							    "showtime": "10:30 AM & 7:00 PM",
//							    "bookingUrl": "https://in.bookmyshow.com/buytickets/skmarlen-cinemas-2k-guindy-alandur/cinema-chen-SKMG-MT/20180624",
//							    "screen": ""
//							  },
//							  {
//							    "title": "KAALA",
//							    "language": "Tamil",
//							    "image": "images/movies/kaala_sk.jpg",
//							    "theater": "sk",
//							    "showtime": "02:30 PM & 10:00 PM",
//							    "bookingUrl": "https://in.bookmyshow.com/buytickets/skmarlen-cinemas-2k-guindy-alandur/cinema-chen-SKMG-MT/20180624",
//							    "screen": ""
//							  },
//							  {
//							    "title": "Kargil",
//							    "language": "Tamil",
//							    "image": "images/movies/Kargil.jpg",
//							    "theater": "gk",
//							    "showtime": "2:30 PM & 7:00 PM & 10:00 PM",
//							    "bookingUrl": "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711",
//							    "screen": "Rukmani"
//							  },
//							  {
//							    "title": "KAALA",
//							    "language": "Tamil",
//							    "image": "images/movies/kaala_gk.jpg",
//							    "theater": "gk",
//							    "showtime": "11:30 AM & 2:30 PM & 7:20 PM & 10:00 PM",
//							    "bookingUrl": "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711",
//							    "screen": "Radha"
//							  },
//							  {
//							    "title": "Tik Tik Tik",
//							    "language": "Tamil",
//							    "image": "images/movies/Tik Tik Tik.jpg",
//							    "theater": "gk",
//							    "showtime": "11:30 AM & 2:30 PM & 7:20 PM & 10:00 PM",
//							    "bookingUrl": "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711",
//							    "screen": "GopiKrishna"
//							  },
//							  {
//							    "title": "The Incredibles 2 (Tamil)",
//							    "language": "Tamil",
//							    "image": "images/movies/The Incredibles 2.jpg",
//							    "theater": "gk",
//							    "showtime": "05:00 PM",
//							    "bookingUrl": "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711",
//							    "screen": "GopiKrishna"
//							  },
//							  {
//							    "title": "Enna Thavam Seitheno",
//							    "language": "Tamil",
//							    "image": "images/movies/enna-thavam-seitheno-movie-clip.jpg",
//							    "theater": "gk",
//							    "showtime": "11:30 AM",
//							    "bookingUrl": "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711",
//							    "screen": "Rukmani"
//							  }];

						 $.getJSON("data/movies.json", {}, function(data) {
						 movies = data;
						$
								.each(
										movies,
										function(key, movie) {

											// Loading Movies
											var theater;

											if (movie.theater.toLowerCase() === 'sk') {
												theater = 'SK Marlen Cinemas'
											} else {
												theater = 'GK Marlen Cinemas'
											}

											var screenText = getScreenText(movie);
											var div = "<div class=\"col-sm-4\"> <div class=\"thumbnail\"> <img src=\""
													+ movie.image
													+ "\" alt=\""
													+ movie.title
													+ "\" width=\"400\" height=\"300\"> <p> <strong>"
													+ movie.title
													+ "</strong> <small>("
													+ movie.language
													+ ")</small></p><p>"
													+ theater
													+ " "
													+ screenText
													+ "</p> <b>Book Tickets</b> "+setBookingButton(movie)+" </div> </div>";
											$('#movies_row').append(div);

											// Loading Banner

											var showtime;
											if (movie.theater === 'sk') {
												showtime = 'SK Marlen Cinemas : '
														+ movie.showtime;
											} else {
												showtime = 'GK Marlen Cinemas : '
														+ movie.showtime;
											}

											var carousel_item_class_active;
											if (key === 0) {
												carousel_item_class_active = " active";
											} else {
												carousel_item_class_active = "";
											}
											var carousel_item = "<div class=\"item "
													+ carousel_item_class_active
													+ "\"><a href=\"#movies\"><img src=\""
													+ movie.image
													+ "\" alt=\""
													+ movie.title
													+  "\" width=\"1000px\" height=\"450px\"><div class=\"carousel-caption\"><h3><strong>"
													+ movie.title
													+ "</strong></h3><h4>"
													+ showtime
													+ "</h4></div></div>";

											$('#banner_carousel').append(
													carousel_item);

											var carousel_indicator = "<li data-target=\"#myCarousel\" data-slide-to=\""
													+ key
													+ "\" class=\""
													+ carousel_item_class_active
													+ "\"></li>";
											$('#carousel_indicators').append(
													carousel_indicator);

										});
						 });
					}
					
					function setBookingButton(movie) {
						var buttonScript;
						var gk_ticketnewurl = "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711";
						var gk_paytmurl = "https://paytm.com/movies/chennai/gopikrishna-complex-2k-a-c-dts-c/4416";
						var sk_bookmyshowurl ="https://in.bookmyshow.com/chennai/cinemas/skmarlen-cinemas-2k-guindy-alandur/SKMG";
						if (movie.theater.toLowerCase() === 'gk') {
							buttonScript = "<button class=\"btn\" onclick=\"window.open('" + gk_ticketnewurl + "', '_blank');\"><img src=\"images/ticketnew.jpg\"></button> <button class=\"btn\" onclick=\"window.open('" + gk_paytmurl + "', '_blank');\"><img src=\"images/paytm.jpg\"></button>";
						} else {
							buttonScript = "<button class=\"btn\" onclick=\"window.open('" + sk_bookmyshowurl + "', '_blank');\"><img src=\"images/bookmyshow.jpg\"></button>";
						}
						return buttonScript;

					}

					function getScreenText(movie) {
						var screenText;
						if (movie.screen != null && movie.screen.trim() != "") {
							screenText = "| <small>Screen : " + movie.screen
									+ "</small>";
						} else {
							screenText = "";
						}
						return screenText;
					}
				});