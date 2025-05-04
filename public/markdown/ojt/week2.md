# Week 2
## On boarding

This week, our focus shifted towards getting hands-on experience with Laravel as we began building the CMS prototype for the Western Mindanao State University, United General alumni association. Our primary goal was to become more familiar with Laravel’s workflow and core features, especially those relevant to content management systems.

We started by setting up a fresh Laravel project and exploring its folder structure, routing, controllers, and Eloquent ORM. This practical exposure helped us understand how to organize our codebase and leverage Laravel’s conventions for rapid development. We also reviewed Laravel’s built-in authentication and middleware, which will be important for securing the admin section of the CMS.

A significant part of this week was dedicated to integrating a WYSIWYG editor for content creation. After evaluating several options, we decided to use Quill.js due to its modern interface and ease of integration. We experimented with embedding Quill.js into our Laravel Blade templates, configuring its toolbar, and ensuring that the editor’s output could be safely stored and retrieved from the database. This involved handling HTML content and considering security aspects such as sanitization.

In parallel, we prototyped the media upload and management functionality. We explored Laravel’s file storage system, testing file uploads, validation, and storage in both the local filesystem and public directories. We discussed how to associate uploaded media with specific posts and how to display media within the WYSIWYG editor. This required us to write basic controllers and routes for handling file uploads, as well as experimenting with displaying uploaded images in the editor preview.

Throughout the week, we documented our findings and shared knowledge within the team to ensure everyone was comfortable with the new tools and concepts. We also started drafting the database schema for posts, media, and categories, mapping out relationships and considering how to support features like tagging and filtering.

The week concluded with a meeting with our client, where we presented the initial CMS prototype. We demonstrated the basic content creation workflow, including the WYSIWYG editor and media upload features. The client provided valuable feedback, particularly on the user interface and the importance of making the system intuitive for non-technical users. Based on this feedback, we identified areas for improvement and set priorities for the next development sprint.

Overall, this week was instrumental in bridging the gap between planning and implementation, allowing us to validate our technical choices and align our prototype with the client’s expectations.
