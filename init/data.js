const sampleListings = [
    {
      title: "The Oberoi Udaivilas, Udaipur",
      description: "A luxury hotel overlooking Lake Pichola, The Oberoi Udaivilas combines regal charm and contemporary luxury. Perfect for a royal getaway.",
      image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=&hp=1",
      },
      price: 18000,
      location: "Udaipur, Rajasthan",
      country: "India",
    },
    {
      title: "Taj Lake Palace, Udaipur",
      description: "Experience luxury at its finest at the Taj Lake Palace, a beautiful 18th-century palace floating on Lake Pichola. A truly magical experience.",
      image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/7362398/pexels-photo-7362398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      price: 25000,
      location: "Udaipur, Rajasthan",
      country: "India",
    },
    {
      title: "The Leela Palace, New Delhi",
      description: "Stay in ultimate luxury at The Leela Palace, one of New Delhi's finest hotels. Enjoy five-star amenities, impeccable service, and elegant rooms.",
      image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/51/ce/10/lobby.jpg?w=700&h=-1&s=1",
      },
      price: 20000,
      location: "New Delhi",
      country: "India",
    },
    {
      title: "Ananda in the Himalayas, Rishikesh",
      description: "A wellness retreat nestled in the serene Himalayas, Ananda offers luxury spa services, yoga, and meditation, making it the ideal destination for rejuvenation.",
      image: {
        filename: "listingimage",
        url: "https://assets.architecturaldigest.in/photos/6440fb5edfce010349530344/3:2/w_1620,h_1080,c_limit/Untitled%20design%20(15).png",
      },
      price: 22000,
      location: "Rishikesh, Uttarakhand",
      country: "India",
    },
    {
      title: "The Taj Mahal Palace, Mumbai",
      description: "One of the most iconic hotels in India, The Taj Mahal Palace offers opulent rooms and world-class service, located by the Gateway of India.",
      image: {
        filename: "listingimage",
        url: "https://healinghotelsoftheworld.com/wp-content/uploads/2019/08/exterior-building-outside-city-healing-taj-mahal-palace-mumbai-hotel-india-1300x0-c-default.jpg",
      },
      price: 30000,
      location: "Mumbai, Maharashtra",
      country: "India",
    },
    {
      title: "Vikram Villa, Goa",
      description: "Enjoy a private villa experience with luxurious amenities at Vikram Villa, Goa. Perfect for groups and families looking for comfort and privacy.",
      image: {
        filename: "listingimage",
        url: "https://www.hotelierindia.com/cloud/2022/04/04/296324649.jpg",
      },
      price: 18000,
      location: "Goa",
      country: "India",
    },
    {
      title: "Wildflower Hall, Shimla",
      description: "Experience a luxurious retreat amidst the stunning snow-capped peaks of Shimla at Wildflower Hall. Perfect for nature lovers and adventure seekers.",
      image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49282842.jpg?k=75fc4a013111265d03226e76fa08b36a4eccc8bf1beba749bc172eabb43e6ebe&o=&hp=1",
      },
      price: 22000,
      location: "Shimla, Himachal Pradesh",
      country: "India",
    },
    {
      title: "The Bungalow on the Beach, Kovalam",
      description: "A serene, beachfront bungalow offering an intimate escape. Located in Kovalam, enjoy private beaches and breathtaking ocean views.",
      image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/a9f1a558-ff62-4ed9-8cd5-fba6012659ed.jpg?im_w=720",
      },
      price: 12000,
      location: "Kovalam, Kerala",
      country: "India",
    },
    {
      title: "Banjaar Tola, Kanha National Park",
      description: "Experience the thrill of a luxury jungle safari at Banjaar Tola, a luxury resort located on the banks of the Banjaar River in Kanha National Park.",
      image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178112594.jpg?k=36e43ef97a85474008e08aef803863a036c22c031f21b6173133ce8bbb876e38&o=&hp=1",
      },
      price: 25000,
      location: "Kanha National Park, Madhya Pradesh",
      country: "India",
    },
    {
      title: "Sula Vineyards Vineyard Resort, Nashik",
      description: "Stay at a vineyard resort in Nashik and experience wine-tasting tours, breathtaking views, and luxury accommodations amidst the lush vineyards.",
      image: {
        filename: "listingimage",
        url: "https://oneway.cab/blog/wp-content/uploads/2016/04/11737968_855397931164049_324742731096233648_n.jpg",
      },
      price: 15000,
      location: "Nashik, Maharashtra",
      country: "India",
    },
    {
      title: "Kumarakom Lake Resort, Kerala",
      description: "This beautiful resort on the backwaters of Kerala offers an intimate, peaceful retreat with private pools, houseboats, and world-class service.",
      image: {
        filename: "listingimage",
        url: "https://image.wedmegood.com/resized/720X/uploads/member/51232/1718009018_Meandering_Pool_3.jpg?crop=9,159,1783,1003",
      },
      price: 20000,
      location: "Kumarakom, Kerala",
      country: "India",
    },
     {
    title: "The Taj West End, Bangalore",
    description:
      "Located in the heart of Bangalore, The Taj West End offers a blend of old-world charm and modern luxury, with lush gardens and impeccable service.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/545842818.jpg?k=717d50f41ffeb585cd5edf9531e02aadaf5a103abcc16d30475867812c8ff12e&o=",
    },
    price: 22000,
    location: "Bangalore, Karnataka",
    country: "India",
  },
  {
    title: "The Park, Kolkata",
    description:
      "A chic and modern luxury hotel in the heart of Kolkata, The Park is known for its vibrant design, stylish interiors, and world-class amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.trvl-media.com/lodging/1000000/530000/523000/522928/e493aa9e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    },
    price: 15000,
    location: "Kolkata, West Bengal",
    country: "India",
  },
  {
    title: "Suryagarh, Jaisalmer",
    description:
      "A majestic fortress-style hotel in the heart of the Thar Desert, Suryagarh offers unparalleled luxury with desert views, world-class dining, and a royal atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://aroyalaffair.in/wp-content/uploads/2023/08/suryagarh-jaisalmer-wedding-cost-min.jpg",
    },
    price: 18000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
  },
  {
    title: "The Leela Palace, Chennai",
    description:
      "The Leela Palace in Chennai offers a stunning blend of traditional Indian architecture and contemporary luxury, overlooking the Bay of Bengal.",
    image: {
      filename: "listingimage",
      url: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1480045835/Domestic%20Hotels/Hotels_Chennai/The%20Leela%20Palace%20Chennai/Overview.jpg",
    },
    price: 28000,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  {
    title: "W Goa, Vagator",
    description:
      "Nestled in the vibrant coastal town of Vagator, W Goa is a chic retreat offering luxurious villas and a lively atmosphere for both relaxation and fun.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2c/d3/ce/porte-cochere.jpg?w=700&h=-1&s=1",
    },
    price: 20000,
    location: "Vagator, Goa",
    country: "India",
  },
  {
    title: "Vivanta by Taj, Fort Aguada",
    description:
      "Located on a stunning beach in Goa, Vivanta by Taj, Fort Aguada blends luxurious accommodations with a rich colonial heritage.",
    image: {
      filename: "listingimage",
      url: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/85/337/728/Facade_Day_O/Vivanta-by-Taj-Fort-Aguada-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto",
    },
    price: 23000,
    location: "Goa, India",
    country: "India",
  },
  {
    title: "Rambagh Palace, Jaipur",
    description:
      "Once the residence of Maharajas, Rambagh Palace in Jaipur offers an opulent stay with a glimpse into royal Rajasthani heritage.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=700&h=-1&s=1",
    },
    price: 35000,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Umaid Bhawan Palace, Jodhpur",
    description:
      "A majestic palace offering a regal experience, Umaid Bhawan in Jodhpur is a haven for luxury and is perfect for royal vacations.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tAV83CQ66C8w-f31C3K_5UDbVRa0jPBM1Q&s",
    },
    price: 40000,
    location: "Jodhpur, Rajasthan",
    country: "India",
  },
  {
    title: "The Oberoi Vanyavilas, Ranthambhore",
    description:
      "A luxury wildlife resort, The Oberoi Vanyavilas offers guests a unique experience combining luxury with nature in the heart of Ranthambhore National Park.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49209820.jpg?k=d16596b9a5a1e1a92bf7b86e98f7250ff9341feb36a5aa09ddbfc8bb0a27555d&o=&hp=1",
    },
    price: 25000,
    location: "Ranthambhore, Rajasthan",
    country: "India",
  },
  
];


module.exports = { data: sampleListings };