# Week 6-7
## General Admin CRUD

**Week 6-7** was a pivotal phase focused on implementing comprehensive **CRUD (Create, Read, Update, Delete)** functionality for the admin panel. This allowed administrators to efficiently manage all major content types across the site.

### Admin CRUD Implementation

We developed and refined CRUD interfaces for the following modules:

- **Announcements**
- **News**
- **Events**
- **Officers**
- **Alumni association links**
- **General data**
- **Donation page content**

Each module received its own dedicated section in the admin dashboard, featuring:

- **Listing pages** with sortable and searchable tables for quick content overview.
- **Create/Edit forms** with validation and user-friendly input fields.
- **Delete actions** with confirmation prompts to prevent accidental data loss.

Special attention was given to the **WYSIWYG editor integration** for rich content fields (e.g., news, announcements, and events), ensuring that admins could easily format text and embed media. We also implemented file upload support for images and documents, with previews and validation for allowed file types.

### Data Relationships and Validation

We established and tested relationships between entities, such as:

- Linking **media files** to posts and events.
- Associating **officers**.
- Managing **alumni association links** with name and URL.

All forms included robust validation rules to maintain data integrity and provide clear feedback to users.

### Donation Page and General Data

The **donation page** received a flexible content management interface, allowing admins to update donation instructions, bank details, and call-to-action messages. We also created a section for managing _general site data_ (e.g., mission/vision, contact info), making it easy to update static content without code changes.

### Challenges and Solutions

- **Complex form validation:** Some modules required conditional validation (e.g., event dates must be in the future). We addressed this using Laravel’s validation rules and custom error messages.
- **Media management:** Handling multiple file uploads and associating them with the correct content type required careful planning. We leveraged Laravel’s relationships and storage system to streamline this process.
- **User experience:** Ensuring the admin panel was intuitive for non-technical users involved iterative UI improvements and feedback sessions.
