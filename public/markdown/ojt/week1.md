# Week 1
## Client meetup and data gathering

_We are currently a week behind the others._ We started with our first client, which resulted in miscommunication in the length of time needed, and was advised to look for another one. Initially, we had high hopes for our first project, but as discussions progressed, it became apparent that the **scope and timeline expectations** were not aligned between our team and the client. The client required a much longer commitment than we could provide within our **OJT schedule**, leading to some frustration and the realization that we needed to pivot quickly. After consulting with our coordinator, we were advised to seek a different client whose project requirements would better fit our available timeframe and resources. 

Fortunately, we are then moved to a more manageable client in terms of time (_2-3 months of planning and development_). In this week, we still haven't met with our new client, but the system that was needed was already discussed a little. 

It's a **CMS** for the **Western Mindanao State University, United General Alumni Association Incorporated**. The client organization is responsible for maintaining connections among alumni and supporting various university initiatives. The **CMS** is expected to streamline their operations, manage member data, and facilitate communication between alumni and the association. However, what we were tasked was only to build the management of the **news, announcement, and events content**. That is, to have a **WYSIWYG** type of content posting and the associated medias.

After some clarification with the client, it became clear that the primary focus would be on enabling administrators to easily create, edit, and publish **news articles, announcements, and event details** through an intuitive interface. The system should also support uploading and organizing **images or other media files** associated with each post. This content management capability is crucial for the association, as it allows them to keep their members informed and engaged with up-to-date information and upcoming activities. Additionally, the client emphasized the need for a **user-friendly backend**, so that non-technical staff can manage content without difficulty.

**Key requirements and data gathered this week:**
- For the **events** section:
  - Store comprehensive details following the _5W's_ (**Who, What, When, Where, Why**)
  - Support for associated media such as images or documents
- For **news and announcements**:
  - Capture the **title, subtitle, main content, and related media**
- For **alumni links**:
  - Provide a simple way to display various alumni association links in the website's dropdown menu
  - Store the **name** of each alumni association and its corresponding **URL**
- For the **officers** section (landing page):
  - Showcase the current officers of the association (_additional feature for transparency and recognition_)

Other general data gathered:
- **UGAAl mission and vision statements**
- Brief **hero description** for the website
- **Location details** and **contact numbers**
- Organization's **logo** for consistent branding

_As we began planning, we also considered how to structure the database for storing posts, categories, and media files, and discussed possible approaches for implementing the WYSIWYG editor and file uploads. These early technical discussions helped us identify potential challenges and areas where we need to deepen our understanding of Laravel's features and best practices._

**Technology stack:**  
We were mandated to use `Laravel` for the framework, which is a PHP-based web application framework known for its elegant syntax and robust features. Although some of us have limited experience with `Laravel`, we were encouraged to be familiar with the framework until next week, so we started exploring its documentation, installation process, and basic concepts such as routing, controllers, and migrations. This initial exposure gave us a better understanding of how `Laravel` can help us structure the project efficiently and meet the client's requirements.
