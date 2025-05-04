# Week 3
## Initial UI and Database design

This week, our efforts were concentrated on establishing the **visual identity** and foundational structure of the CMS, as well as laying the groundwork for the database schema. Building on the requirements and feedback from previous weeks, we began by redesigning the frontend for the landing page. The new layout was organized into clear sections: **header**, **hero/front**, **news and events**, **officers**, **about**, and **footer**. Each section was carefully planned to ensure a cohesive user experience and to highlight the most important information for site visitors.

We iterated on the **hero section**, focusing on visual appeal and clarity. At this stage, the hero had _no call-to-action (CTA)_, as we were still gathering input from the client regarding the primary actions they wanted users to take. The design aimed to communicate the association’s mission and values at a glance, using the organization’s branding elements such as the **logo** and **color scheme**.

The **mission and vision page** was also revisited and redesigned to better align with the updated visual style. We ensured that the content was presented in a clear and engaging manner, making it easy for visitors to understand the association’s purpose.

On the technical side, we began sketching out the **database design**. Although we did not implement migrations yet, we created initial diagrams and notes outlining the main entities and their relationships. The primary focus was on structuring tables for **posts** (_news, announcements, events_), **media files**, **categories**, and **officers**. We discussed how to represent relationships such as associating multiple media files with a single post, and how to store additional metadata for events (e.g., date, location, and description following the _5W’s_).

Throughout the week, we encountered several challenges, particularly in translating the client’s requirements into a **scalable** and **maintainable** database structure. We debated different approaches for handling _polymorphic relationships_ (e.g., media attached to various content types) and considered Laravel’s **Eloquent ORM** capabilities to simplify these associations.

We also started prototyping some UI components using **Blade templates**, experimenting with responsive layouts and reusable partials for sections like the news/events list and officer profiles. This hands-on work helped us identify gaps in our initial designs and refine our approach before moving on to full implementation.

Regular communication with the client continued, with design mockups and database sketches shared for feedback. The client appreciated the progress on the visual side and provided input on content organization and priorities for the next sprint. Based on their feedback, we planned to finalize the database schema and begin implementing backend functionality in the following week.

Overall, this week marked a significant step forward in both the **visual** and **structural** aspects of the project, setting a solid foundation for the development work ahead.
