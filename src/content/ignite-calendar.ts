import type { PageContent } from '@/types/content';

export const igniteCalendar: PageContent = {
  "title": "IGNITE Calendar",
  "eyebrow": "Calendar",
  "sections": [
    {
      "title": "View Our Schedule",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Check out our upcoming events, classes, and activities. From weekly yoga sessions and SUP adventures to special moonlit events and community gatherings.",
          "plain": true
        }
      ]
    },
    {
      "eyebrow": "Book Ahead",
      "title": "Plan Your Visit",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our operating hours are from 6:00 AM to 7:00 PM every day, with the final booking available at 6:00 PM. We recommend booking in advance, especially for weekend classes and special events.",
          "plain": true
        }
      ]
    },
    {
      "blocks": [
        {
          "type": "cta",
          "label": "📄 Download March Calendar (PDF)",
          "href": "/watersports/calendar.pdf",
          "download": "IGNITE-Water-Sports-Calendar-March.pdf",
          "newTab": true
        },
        {
          "type": "cta",
          "label": "Book Activities Online",
          "href": "https://book.ignitewatersports.com/",
          "newTab": true
        }
      ],
      "layout": "row"
    }
  ],
  "seo": {
    "title": "IGNITE Calendar",
    "description": ""
  }
};

export default igniteCalendar;
