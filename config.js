const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "home_relax", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_out", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Toronto Blue Jays Ticket Giveaway",
    "heroHeadline": "Step Up to the Plate for an Unforgettable Summer!",
    "heroSubheadline": "Experience the Excitement of a Toronto Blue Jays Game100% Free!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Get My Tickets Now",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "3C6 You're In! 3C6",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Ticket Giveaway</strong> has been successfully submitted. Good luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Enjoy an energetic day at the ballpark with exciting Toronto Blue Jays tickets worth $100. Perfect for baseball lovers and summer fun seekers, experience the thrill of a live game with friends or family.",
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "alt": "Toronto Blue Jays Baseball Game"
      },
      {
        "src": "https://images.unsplash.com/photo-1506619216599-9e02d39a3101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "alt": "Fans cheering at Blue Jays game"
      },
      {
        "src": "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "alt": "Baseball game action with crowd"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Tickets worth $100 for the Toronto Blue Jays game" },
      { "icon": "fas fa-users", "text": "Great summer outing with family or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live baseball excitement" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Fast and easy entry at our Canada Day booth!" }
    ],
    "limitedTimeOfferText": "381 Limited Time Giveaway!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st."
      },
      {
        "icon": "fas fa-clipboard-list",
        "title": "Complete the Survey",
        "description": "Fill out a quick and fun survey at our booth to enter."
      },
      {
        "icon": "fas fa-trophy",
        "title": "Wait for the Draw",
        "description": "The winner will be announced on July 2nd."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Exciting Sports Experience" },
      { "icon": "fas fa-gift", "text": "Free Entry and Chance to Win" },
      { "icon": "fas fa-smile", "text": "Fun and Easy Giveaway" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win Toronto Blue Jays tickets!",
    "entryCountText": "Join hundreds of baseball fans already entered!",
    "socialSharePrompt": "Share the thrill with friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets this Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Winner will be selected randomly with a certified random number generator to ensure fairness for all entries."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The winner will be contacted only via the email address provided at entry. Check your inbox and spam folder after July 2, 2025."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to legal residents of Toronto aged 18 and older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "From June 18, 2025, through July 1, 2025, with the draw on July 2, 2025."
      },
      {
        "q": "How is the winner chosen?",
        "a": "One winner will be selected randomly from all eligible entries received during the promotion period."
      },
      {
        "q": "How will I know if I won?",
        "a": "The winner will be notified via email on or soon after July 2, 2025."
      },
      {
        "q": "Can I enter multiple times?",
        "a": "Limited to one entry per person/email during the campaign period. Multiple entries will be disqualified."
      },
      {
        "q": "Is my information kept private?",
        "a": "All information is used only for this giveaway in accordance with our Privacy Policy. We do not sell your data."
      }
    ],
    "tips": [
      "Make sure your email is correct before submitting.",
      "Add our contact email (shar@theskygroup.ca) to your address book to receive notifications.",
      "Follow Sky Group on social media for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Toronto Blue Jays Ticket Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004C97", "#E31937", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-299",
    "repoUrl": "https://github.com/arslvn93/Giveaway-299",
    "tag": "Toronto Blue Jays July 1st Giveaway",
    "netlifyUrl": "http://Giveaway-299.netlify.app",
    "netlifyId": "1003270519"
  }
};