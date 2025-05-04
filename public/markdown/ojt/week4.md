# Week 4
## Responsiveness and Database Design Implementation

Building on the groundwork from previous weeks, **Week 4** marked a significant transition from planning and prototyping to actual implementation. Our main focus areas were **responsive design** for the public-facing pages and the **practical realization of our database schema** using Laravel migrations.

### Responsive Design

We dedicated substantial effort to ensuring that the **landing page** and all public pages were fully responsive. This involved:

- Refactoring existing Blade templates to use **flexible layouts** (e.g., CSS Flexbox and Grid).
- Testing across multiple devices and screen sizes to guarantee a consistent user experience.
- Adjusting font sizes, image scaling, and navigation elements for mobile compatibility.
- Creating reusable CSS classes and Blade components for common UI patterns.

Special attention was given to the **hero section** and **news/events listings**, as these are the most frequently accessed areas. We also improved the **officers** and **about** sections to ensure they remained visually appealing and readable on smaller screens.

### Database Structure and Migrations

With the database design finalized in Week 3, we proceeded to implement the schema using **Laravel migrations**. Key steps included:

- Creating tables for **posts** (covering news, announcements, and events), **media files**, **categories**, and **officers**.
- Establishing **table relationships** using foreign keys, including:
  - Associating multiple media files with a single post (one-to-many).
  - Linking posts to categories.
  - Setting up polymorphic relationships for media attachments, allowing flexibility for future content types.
- Adding necessary fields for metadata, such as event dates, locations, and descriptions (following the _5W’s_).

We encountered some challenges in translating our ERD into Laravel’s migration syntax, especially with **polymorphic relationships**. After some trial and error, we successfully implemented these using Laravel’s built-in morphs and tested the relationships with seed data.

### Donation Section and Alumni Tracer Form

We began the **initial design** for the **donation section** and the **alumni tracer form**:

- For the donation section, we sketched out the user flow and UI, considering integration with third-party payment gateways in the future.
- For the alumni tracer form, we drafted the fields required to collect alumni information and started prototyping the form layout using Blade and Bootstrap components.

### Collaboration and Feedback

Throughout the week, we maintained regular communication with the client, sharing screenshots and database diagrams for feedback. The client appreciated the improved responsiveness and provided suggestions for the donation workflow and alumni form fields.

### Challenges and Learnings

- **Polymorphic relationships** in Laravel required careful planning and testing.
- Ensuring pixel-perfect responsiveness across all sections was more time-consuming than anticipated, but the results were well worth the effort.
- We learned the importance of **incremental testing**—validating each migration and UI change before moving on.

---

**_Overall, Week 4 was a pivotal phase where our designs and plans began to materialize into a functional, user-friendly system. The foundation laid this week will support the addition of more advanced features in the coming sprints._**
