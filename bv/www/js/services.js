angular.module('starter.services', [])

.factory( 'Resorts', function(){ 

	var resorts = [{ 
			code       : 'bbv',
			name       : 'The Club at Big Bear Village',
			street1    : '40671 Village Drive',
			street2    : '',
			city       : 'Big Bear Lake',
			state      : 'CA',
			postalCode : '92315',
			latitude   : '34.239878',
			longitude  : '-116.915125',
			country    : 'US',
			type       : 'club',
			content    : '<p>Amid the peaks of the San Bernardino Mountains on idyllic Big Bear Lake rests a Bluegreen Vacations resort that sends the outdoors explorer into a sense of euphoria. A resort for all seasons, enjoyable for many reasons, The Club at Big Bear Village offers luxury villas and impeccable accommodations, a perfect respite from your outdoor adventures. Ultra spacious and comfortable, three- and four-bedroom villas offer cozy furniture, plush bedding and fully equipped kitchens—complete with state-of-the-art appliances—as well as full balconies and even BBQ grills. Whirlpool baths help you relax while living room fireplaces give reason for family to gather. Each vacation villa includes a washer and dryer, as well, for that last touch of home.</p><p>The Club at Big Bear Village is a destination all in its own, with amenities and accommodations that provide everything you need to relax, enjoy and spend time with family. A seasonal outdoor heated pool helps families and friends cool off after afternoons of hiking the San Bernardino Mountains or after a long workout in the private fitness center. A billiards room offers a place to play, while kid and teen rooms provide youngsters with the space to have fun. With access to the nearby lake, a friendly resort hospitality team and spacious villas, you might just find yourself unable to leave!​</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-exterior-pool-01?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/hero-the-club-at-big-bear-village-exterior-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-3-bedroom-dining-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-3-bedroom-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-4-bedroom-guestroom-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-exterior-pool-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-club-at-big-bear-village-billards-room-01?$bgv-hero-main$'
			}], 
			floorplans : []
		}, { 
			code       : 'c36',
			name       : 'Bluegreen Club 36™',
			street1    : '372 East Tropicana Ave.',
			street2    : '',
			city       : 'Las Vegas',
			state      : 'NV',
			postalCode : '89169',
			latitude   : '36.102989',
			longitude  : '-115.154295',
			country    : 'US',
			type       : 'club',
			content    : '<p>Bluegreen Club 36™ is a sure bet for anyone looking to combine the luxury of Las Vegas with the privacy of home. This desert oasis is located just blocks away from the Vegas Strip with a proximity to the MGM Grand®, Mandalay Bay and other popular gaming destinations. The resort prides itself on its decadent Parisian Art Deco style evocative of the excitement and style of the 1930s. Each vacation villa is decked out with the comforts of home while two Presidential suites deliver the glitz and glamour you’d expect as a high-rollin’ Vegas shark.</p><p>If you’d like to experience the excitement of all the popular Vegas attractions combined with a retreat from the nonstop action of the Strip, Bluegreen Club 36™ is a must. Relax at the indoor pool or sunbathe outside on the sundeck while enjoying a great view of Las Vegas. If you’ve come to Las Vegas to unwind, a massage in one of our relaxing spa rooms might be just what you need. The resort also offers an on-site shopping plaza. Should you need anything else, you can find it on the Strip.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-rooftop-lounge-02-1?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/hero-club-36-rooftop-lounge-03?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-indoor-pool-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-presidential-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-presidential-bedroom-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-living-room-01?$bgv-hero-main$&crop=0,803,5052,2614&anchor=2526,2110'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/club-36-deluxe-bedroom-01?$bgv-hero-main$&crop=1447,434,3980,3296&anchor=3437,2082'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b1-2bdr-combined-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,190 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b1-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 704 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b1-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 486 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b2-2bdr-combined-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,190 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b2-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 710 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b2-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 480 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b3-2bdr-combined-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,288 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b3-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 735 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b3-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 553 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b4-2bdr-combined-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,404 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b4-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 597 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-b4-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 807 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/bluegreen-club-36-presidential-suite-floor-plan?$bgv-gallery-main$',
					'caption' : '3 Bedroom Presidential Suite, 2,520 sq ft.'
			}]
		}, { 
			code       : 'via',
			name       : 'Via Roma Beach Resort',
			street1    : '2408 Gulf Drive N.',
			street2    : '',
			city       : 'Bradenton',
			state      : 'FL',
			postalCode : '34217',
			latitude   : '27.481205',
			longitude  : '-82.704692',
			country    : 'US',
			type       : 'club',
			content    : '<p>Via Roma is a small, intimate resort with a Mediterranean style. With its white stucco buildings and Romanesque columns combined with Florida’s picturesque palm trees, sea oats and hibiscus trees, this laid-back beachfront resort is the best of both worlds.</p><p>This is the perfect place to stroll the beaches for hidden treasures, enjoy leisurely games of shuffleboard, tour the island by bicycle or simply sit back and relax by the on-site pool and hot tub. Everything is beachfront including on-site BBQ grills—perfect for grilling up your catch from your afternoon fishing adventure.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-pool-01?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-pool-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-beach-view-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-kitchen-dining-room-01?$bgv-hero-main$&crop=0,533,1500,979&anchor=750,1022'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-a1-1bedroom-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom, 592 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-b2-2bedroom-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 836 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/via-roma-beach-resort-a1-1bedroom-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom, 592 sq ft.'
			}]
		}, { 
			code       : 'day',
			name       : 'Daytona SeaBreeze™',
			street1    : '3125 S. Atlantic Ave.',
			street2    : '',
			city       : 'Daytona Beach',
			state      : 'FL',
			postalCode : '32118',
			latitude   : '29.163461',
			longitude  : '-80.975043',
			country    : 'US',
			type       : 'club',
			content    : '<p>Daytona SeaBreeze™ gives you the opportunity to not only stay on the beach, but also to drive on it! Daytona Beach is one of the last existing drive-on beaches, so this is your chance to hop in the car, drop the top and go for a ride. Imagine having the beach at your doorstep and the beautiful blue Atlantic Ocean calling to you from sunup to sundown. And the cool décor of your Daytona SeaBreeze™ villa only accentuates the “beachiness” of your experience.</p><p>Open the door to your villa; then step out onto your balcony and enjoy the fresh air and salty breezes. Miles of soft golden sands stretch before you. Water sports are abundant, so snorkeling, swimming and driving a Jet Ski® are strongly encouraged. Or enjoy watching as friends and strangers get their adrenaline pumping out on the Atlantic from the oceanfront pool and hot tub. Kids can even play in their own children’s pool! And when the day winds down, be sure to use one of the resort’s BBQ grills and pretend you’re in your own backyard.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-exterior-pool-03?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-exterior-night-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-exterior-pool-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-bedroom-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-presidential-suite-living-room-01?$bgv-hero-main$&crop=0,739,3840,1821&anchor=1920,1649'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-presidential-dinning-room-01?$bgv-hero-main$'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-a1-1bdr-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Oceanfront, 420 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-a2-1bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom, 424 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-b1-2bdr-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Oceanfront, 714 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-b2-2bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 841 sq ft.'
				}, { 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/daytona-seabreeze-presidential-suite-floor-plan?$bgv-gallery-main$',
					'caption' : '4 Bedroom Presidential Suite, 2,525 sq ft.'
			}]
		}, { 
			code       : 'ham',
			name       : 'The Hammocks at Marathon™',
			street1    : '1688 Overseas Highway',
			street2    : 'Mile Marker 48',
			city       : 'Marathon',
			state      : 'FL',
			postalCode : '33050',
			latitude   : '24.709899',
			longitude  : '-81.107247',
			country    : 'US',
			type       : 'club',
			content    : '<p>With a name like The Hammocks at Marathon™, this resort’s biggest draw is obvious —relaxation. Whether at the tiki bar, by the pool, or on your balcony, you can’t help but relax. Lush tropical landscaping at the entrance, the saltwater coral reef aquarium in the lobby, the tiki torches that dot the property terrain—everything about the Hammocks tells you you’re somewhere that time slows down. The palm trees sway in tune with the ocean’s breeze. The drink blender hums in the distance, morning, afternoon and night. Time is slower. Life is easier. And every day just gets better during your vacation in the Florida Keys.</p><p>The vacation villas at this bayside resort are perfectly situated to give you views of nature and wildlife you might never have seen before. Survey the lagoon to find parrotfish, tarpon and lobster. Admire the beauty of egrets, herons and pelicans among the mangroves. You might even see an iguana—but you’ll have to look closely, because the vegetation at the resort is as dense as it is beautiful. You’ll also find palm trees, hammocks and tiki torches as well as a shimmering pool and relaxing hot tub. To help you enjoy an exciting day at sea, the resort offers on-site kayak, boat and Jet Ski® rentals. You can even charter a fishing boat when you’re not busy sitting at the tiki bar. Talk about an amazing island vacation!</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-pool-01?$bgv-resort-flyout-thumbnail$&crop=892,1293,2436,1559&anchor=2110,2072',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-exterior-pool-ocean-view-01?$bgv-hero-main$&crop=0,1403,4838,1737&anchor=2419,2271'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-pool-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-bedroom-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-exterior-balcony-view-01?$bgv-hero-main$&crop=0,220,2689,1789&anchor=1344,1114'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-exterior-pool-03?$bgv-hero-main$&crop=0,1154,4221,1657&anchor=2110,1982'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-a1-studio-floor-plan?$bgv-gallery-main$',
					'caption' : 'Studio, 432 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-a2-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 768 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-hammocks-at-marathon-b1-2bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 864 sq ft.'
			}]
		}, { 
			code       : 'osr',
			name       : "Orlando's Sunshine Resort™",
			street1    : '5473 Del Verde Way',
			street2    : '',
			city       : 'Orlando',
			state      : 'FL',
			postalCode : '',
			latitude   : '28.464207',
			longitude  : '-81.455709',
			country    : 'US',
			type       : 'club',
			content    : '<p>It’s nice to have your very own Orlando vacation villa with Bluegreen Vacations. That’s exactly what you have at Orlando’s Sunshine Resort™—a place to escape the madness of Orlando’s attractions and relax in the privacy of your own home-away-from-home. Sure, it’s fun to see what’s new at the world-famous parks down the street, but something can be said for a little peace and quiet, too. Stick around and enjoy an abundance of on-site activities or head out for to a less-crowded, less-touristy destination. Orlando might offer the biggest and best family attractions, but it offers so much more.</p><p>You don’t necessarily have to spend your entire Orlando vacation waiting in lines with droves of strangers. Why not enjoy time at the resort? Sit out on your screened-in porch and read a book; soak in the Florida sun by the pool; organize a game of shuffleboard; or challenge your mate to tennis. Then, soothe your aching muscles in the sauna or hot tub. You’ll appreciate the convenience of the poolside snack bar, too. Kids can splash in the kiddie pool or enjoy arts and crafts. But when you’re ready to do the theme park thing, one of Orlando’s premier water parks, Wet n’ Wild®, is right down the street. The fun and relaxation of this Orlando resort make for amazing vacations, year after year.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-exterior-03?$bgv-resort-flyout-thumbnail$&crop=620,954,4050,2246&anchor=2645,2077',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-pool-03?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-exterior-night-01?$bgv-hero-main$&crop=0,921,5718,2700&anchor=2859,2271'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-dining-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-bedroom-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/orlando-sunshine-bedroom-05?$bgv-hero-main$'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/orlandos-sunshine-resort-b2-2bdr-phase2-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom – Phase 2, 1,228 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/orlandos-sunshine-resort-b1-2bdr-phase1-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom – Phase 1, 1,380 sq ft.'
			}]
		}, { 
			code       : 'ftn',
			name       : 'The Fountains',
			street1    : '12400 International Drive',
			street2    : '',
			city       : 'Orlando',
			state      : 'FL',
			postalCode : '32821',
			latitude   : '28.3876832',
			longitude  : '-81.4775241',
			country    : 'US',
			type       : 'club',
			content    : '<p>Orlando’s world-famous attractions preside majestically over the rest of the city. But The Fountains exists in a kingdom of its own—all 54 acres of it. Located on International Drive, your outlet to every attraction you’ve come to see, this Orlando retreat holds its own with a full calendar of activities for adults and children alike. Vacation villas offer the space and amenities you need to feel right at home while the property itself is carved out of the legend of Wakoola—an ancient storyline and theme found only at The Fountains.</p><p>Orlando is famous for its world-renowned attractions, cuisine with flavors from all over the world and family fun. Vacations at The Fountains are famous for something, too: Bluegreen’s Wakoola Springs, a spectacular 75,000-square-foot tropical water wonderland that is anything but ordinary. Extraordinary features include two twisting water slides, a zero-entry pool, interactive water fountains, two hot tubs, and Wakoola Grill, our on-site bar and grill. Beautiful Lake Eve also offers fishing and paddleboats and features a boardwalk and pier for your enjoyment. You’ll also find a 6,000-square-foot indoor/outdoor pool area, two hot tubs, a convenient pool bar and a playground for the kids. Plus, our 20,000-square-foot clubhouse is home to the gift shop, a lounge area, and a kids’ activity center with video games, air hockey and billiard tables.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-pool-05?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-exterior-balcony-pools-01?$bgv-hero-main$&crop=0,1044,6801,2546&anchor=3400,2317'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-exterior-entrance-fountain-01?$bgv-hero-main$&crop=0,411,5616,2145&anchor=2808,1483'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-living-dining-room-01?$bgv-hero-main$&crop=0,1181,5028,1918&anchor=2514,2140'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-bedroom-03?$bgv-hero-main$&crop=0,1009,5049,1903&anchor=2524,1960'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-pool-05?$bgv-hero-main$&crop=0,304,2500,1016&anchor=1250,812'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-exterior-02?$bgv-hero-main$&crop=0,163,5616,2582&anchor=2808,1454'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-b1-2bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Standard, 1,034 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-b2-2bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 1,190 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-b3-2bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Deluxe, 1,343 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-presidential-suite-floor-plan?$bgv-gallery-main$',
					'caption' : '3 Bedroom Presidential Suite, 2,725 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/the-fountains-superior-2bed-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Superior, 1,278 sq ft.'
			}]
		}, { 
			code       : 'cdm',
			name       : 'Casa Del Mar Beach Resort',
			street1    : '621 South Atlantic Ave.',
			street2    : '',
			city       : 'Ormond Beach',
			state      : 'FL',
			postalCode : '32176',
			latitude   : '29.276123',
			longitude  : '-81.031547',
			country    : 'US',
			type       : 'club',
			content    : '<p>If you’re looking for a place to escape everyday life and relax on the sand, book your vacation here. With beautiful beaches, calm, soothing ocean waters and an abundance of warm Florida sun, Ormond Beach offers an ideal location for the Florida beach vacation of your dreams. And the hospitality team at Casa Del Mar Beach Resort is warm, friendly and goes out of its way to ensure your vacation is nothing but the best.</p><p>Oceanfront accommodations make it easy to cruise the beach, jump in the ocean, play beach volleyball or hit the surf. You can rent chairs, umbrellas, bicycles and boogie boards from vendors, too. Or stick to the resort and test your endurance in our Olympic-sized pool. Ease into our outdoor hot tub and soak away your worries. Make your way to Parrot’s bar and lounge overlooking the pool and ocean for cold drinks, then grill up dinner on the pool deck BBQ grill. Kids can swim in the children’s pool, take part in our activities program or spend time in the game room. It’s no wonder why so many vacationers choose Casa Del Mar Beach Resort!</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-pool-01?$bgv-resort-flyout-thumbnail$&crop=613,1715,4395,2029&anchor=2810,2729',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-exterior-01?$bgv-hero-main$&crop=724,877,3655,2353&anchor=2551,2053'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-pool-02?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-pool-hot-tub-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-living-room-02?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-bedroom-02?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-parrots-restaurant-01?$bgv-hero-main$'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b2-2bdr-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Oceanfront, 791 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b4-2bdr-oceanfront-combined-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom Oceanfront, 975 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b4-1bdr-studio-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : 'Studio Oceanfront, 432 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b4-1bdr-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Oceanfront, 543 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b3-2bdr-deluxe-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Deluxe Ocean View, 844 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-a1-studio-streetside-floor-plan?$bgv-gallery-main$',
					'caption' : 'Studio Streetside, 302 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-a2-1bdr-std-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard Oceanfront, 432 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-a3-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 543 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/casa-del-mar-beach-resort-b1-2bdr-oceanfront-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom Oceanfront, 755 sq ft.'
			}]
		}, { 
			code       : 'wgv',
			name       : 'Grande Villas at World Golf Village®',
			street1    : '100 Front Nine Drive',
			street2    : '',
			city       : 'St. Augustine',
			state      : 'FL',
			postalCode : '32092',
			latitude   : '29.993807',
			longitude  : '-81.472059',
			country    : 'US',
			type       : 'club',
			content    : '<p>Grande Villas at World Golf Village® is a year-round golfer’s paradise. Two championship 18-hole courses are yours to enjoy, one designed by Jack Nicklaus and Arnold Palmer and the other with input from Sam Snead and Gene Sarazen. But the World Golf Village complex lets you experience your favorite game however you like. Improve your swing via high-tech analysis at PGA Tour Academy. Shop for that hard-to-find utility club at the largest golf store in Florida. Enjoy camaraderie with fellow golfers at a themed restaurant, grille or sports bar. And of course, expand your appreciation for the history of the game at the World Golf Hall of Fame®.</p><p>And if you have interests apart from golf, just off the premises in downtown St. Augustine you’ll find more than enough places of interest to fill your day and then some. Spanish Colonial architecture sets the city apart aesthetically, but the area—first explored in 1513 and founded as a city in 1565—is rooted in history and lore. Explore haunted lighthouses and Spanish forts. Sip from the legendary Fountain of Youth. Admire the opulence of Henry Flagler’s twin legacies to St. Augustine, the former Ponce De Leon Hotel (now Flagler College) and the Lightner Museum. There’s so much to do, all in year-round sunshine, that you almost forget you’re only minutes from a beautiful Atlantic beach as well. That’s the beauty of vacationing in St. Augustine—there’s something truly for everyone.</p><p>There’s something for everyone back at Grande Villas, too. You won’t have to climb into a car to play tennis, basketball or volleyball. Or swim or lounge at the showpiece resort pool. Or work out in the fitness room. Or see the latest first-run film at the largest IMAX® theater in the Southeast. Or retreat to Spa Laterra for a day of rejuvenation. Or find just the right restaurant for you. And if you don’t have time to schedule your own dinner reservations, excursions or tee times, either—our Guest Services team will do that for you.</p><p>World Golf Village and World Golf Hall of Fame are registered trademarks of World Golf Foundation, Inc. All other marks are property of their respective owners.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/world-golf-village-golf-course-01?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/world-golf-village-golf-course-01?$bgv-hero-main$&crop=0,668,5616,2614&anchor=2808,1975'
				}, { 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/st-augustine-resort-golf-view-lake-08?$bgv-hero-main$&crop=0,249,5616,2501&anchor=2808,1499'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/world-golf-village-pool-01?$bgv-hero-main$&crop=0,0,5616,2960&anchor=2808,1480'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/world-golf-village-resort-dining-room-02?$bgv-hero-main$&crop=0,406,2500,1205&anchor=1250,1008'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/world-golf-village-resort-master-bedroom-03?$bgv-hero-main$&crop=0,509,2500,1102&anchor=1250,1060'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/st-augustine-resort-small-pool-02?$bgv-hero-main$&crop=0,389,2500,1222&anchor=1250,1000'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-a1-1bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom, 620 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b1-2bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 1,124 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-2bdr-lockout-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,465 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 590 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 875 sq ft.'
			}]
		}, { 
			code       : 'sol',
			name       : 'Solara Surfside',
			street1    : '8801 Collins Ave.',
			street2    : '',
			city       : 'Surfside',
			state      : 'FL',
			postalCode : '33154',
			latitude   : '25.874038',
			longitude  : '-80.121406',
			country    : 'US',
			type       : 'club',
			content    : '<p>Surfside is just minutes north of South Beach, the hottest, trendiest Florida vacation destination since the first neon light was plugged in on Deco Drive. Miami is famous for its Art Deco architecture—and Solara Surfside™ blends in perfectly. The pale blue and green exterior with white accent dramatically reflects the ocean’s hues. When night falls, accent lighting highlights tropical palms for breathtaking sights. Step inside and there will be no doubt you’re someplace special. The lobby is adorned with oak walls, marble counters and a decorative tile floor. If you enjoy hospitality and service, the friendly team at Solara Surfside™ won’t disappoint. And when it comes to planning some great Miami vacation adventures, our concierge will assist you by handling all of the details.</p><p>Walk right out your villa and along the Atlantic Ocean to explore miles of golden beaches. Stay on-site and relax in the whirlpool or play a game of shuffleboard. Marvel at the beauty of the ocean view as you unwind at the outdoor heated pool. Stay in shape with a trip or two to the fitness room. Or fire up the BBQ grill and prepare a fresh tropical lunch. No matter what you choose, your South Florida getaway is sure to be fun-filled and relaxing.</p>',
			thumbnail  : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-exterior-02?$bgv-resort-flyout-thumbnail$',
			gallery    : [{ 
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-exterior-02?$bgv-hero-main$&crop=0,231,4529,1939&anchor=2264,1200'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-pool-01?$bgv-hero-main$&crop=0,1522,3602,2078&anchor=1801,2561'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-kitchen-living-room-01?$bgv-hero-main$'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-balcony-view-beach-01?$bgv-hero-main$&crop=0,0,4551,2732&anchor=2275,1366'
				}, {
					'src' : 'https://s7.bluegreenvacations.com/is/image/BGV/solara-surfside-bedroom-02?$bgv-hero-main$&crop=0,187,4531,2385&anchor=2265,1379'
			}], 
			floorplans : [{ 
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-a1-1bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom, 620 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b1-2bdr-floor-plan?$bgv-gallery-main$',
					'caption' : '2 Bedroom, 1,124 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-2bdr-lockout-floor-plan?$bgv-gallery-main$',
					'caption' : 'Combined 2 Bedroom, 1,465 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-1bdr-standard-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Standard, 590 sq ft.'
				}, {
					'src'     : 'https://s7.bluegreenvacations.com/is/image/BGV/grande-villas-at-world-golf-village-b2-1bdr-deluxe-floor-plan?$bgv-gallery-main$',
					'caption' : '1 Bedroom Deluxe, 875 sq ft.'
			}]
	}];

	return {
		all: function() {
			return resorts;
		},

		getByCode: function( resortCode ){ 
			for( var i = 0; i < resorts.length; i++ ){ 
				if( resorts[i].code === resortCode ){ 
					return resorts[i];

				} // endif
			} // endfor

			return null;
		},

		getByState: function( stateAbbrev ){ 
			var availResorts = [];

			for( var i = 0; i < resorts.length; i++ ){ 
				if( resorts[i].state === stateAbbrev ){ 

					availResorts.push( resorts[i] );

				} // endif
			} // endfor

			return availResorts;
		}
	};

})

.factory( 'MoreMenu', function(){

	var moreMenu = [{ 
		itemName : 'Owners Lounge' 
	}, { 
		itemName : 'Item Two' 
	}, { 
		itemName : 'Item Three' 
	}];

	return {

		all: function(){
			return moreMenu;
		},
		data: function(){ 
			return moreMenu;
		}
	
	};

})

.factory( 'ResortStates', function(){ 

	var resortStates = [{ 
		abbrev : 'AL',
		name   : 'Alabama',
		count  : 2,
		img    : ''
	}, {
		abbrev : 'AZ',
		name   : 'Arizona',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'CA',
		name   : 'California',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'CO',
		name   : 'Colorado',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'FL',
		name   : 'Florida',
		count  : 21,
		img    : ''
	}, { 
		abbrev : 'GA',
		name   : 'Georgia',
		count  : 3,
		img    : ''
	}, { 
		abbrev : 'HI',
		name   : 'Hawaii',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'IL',
		name   : 'Illinois',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'LA',
		name   : 'Louisiana',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'MA',
		name   : 'Massachusetts',
		count  : 2,
		img    : ''
	}, { 
		abbrev : 'MI',
		name   : 'Michigan',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'MO',
		name   : 'Missouri',
		count  : 4,
		img    : ''
	}, { 
		abbrev : 'MN',
		name   : 'Montana',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'NV',
		name   : 'Nevada',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'NH',
		name   : 'New Hampshire',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'NJ',
		name   : 'New Jersey',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'NY',
		name   : 'New York',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'NC',
		name   : 'North Carolina',
		count  : 3,
		img    : ''
	}, { 
		abbrev : 'PA',
		name   : 'Pennsylvania',
		count  : 1,
		img    : ''
	}, { 
		abbrev : 'SC',
		name   : 'South Carolina',
		count  : 7,
		img    : ''
	}, { 
		abbrev : 'TN',
		name   : 'Tennessee',
		count  : 2,
		img    : ''
	}, { 
		abbrev : 'VA',
		name   : 'Virginia',
		count  : 2,
		img    : ''
	}, { 
		abbrev : 'WI',
		name   : 'Wisconsin',
		count  : 2,
		img    : ''
	}];


	return { 
		find: function( name, callback ){ 
			var resort = resortStates.filter(function( entry ){ 
				return entry.abbrev == name;
			})[0];
		},

		data: function(){ 
			return resortStates;
		},

		get: function( stateAbbrev ){ 
			for( var i = 0; i < resortStates.length; i++ ){ 

				if( resortStates[i].abbrev === stateAbbrev ){ 
					return resortStates[i];

				} // endif
			} // endfor

			return null;
		}
	};

});