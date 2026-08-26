import type { PageContent } from '@/types/content';

export const communityEvents: PageContent = {
  "title": "Community Events",
  "eyebrow": "Community",
  "sections": [
    {
      "title": "Events That Bring People Together",
      "blocks": [
        {
          "type": "paragraph",
          "text": "At IGNITE Water Sports, we believe in building a strong, active community. Our community events range from charity paddle-outs and beach cleanups to social gatherings and wellness workshops.",
          "plain": true
        }
      ]
    },
    {
      "eyebrow": "Upcoming",
      "title": "What Is Coming Up",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Stay tuned for our upcoming community events including Full Moon Series sessions, Pink is Punk charity events, seasonal celebrations, and more.",
          "plain": true
        },
        {
          "type": "list",
          "items": [
            {
              "text": "Global Heart Day",
              "href": "/product/global-heart-day/",
              "suffix": " – AED99.00"
            },
            {
              "text": "IGNITE Reset Club",
              "href": "/product/ignite-reset-club/",
              "suffix": " – AED160.00 – AED500.00"
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "type": "cta",
          "label": "View Events",
          "href": "/events"
        }
      ]
    }
  ],
  "seo": {
    "title": "Community Events - IGNITE Water Sports",
    "description": "IGNITE Water Sports community events on Palm Jumeirah, including Global Heart Day and the IGNITE Reset Club."
  }
};

export default communityEvents;
