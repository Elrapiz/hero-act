# Week 7
## Alumni Tracer Form

**Week 7** marked the culmination of our efforts to implement a robust and flexible **Alumni Tracer Form** system, a key deliverable for the project. This week was dedicated to both the **finalization** and **integration** of the alumni tracer feature on the admin and public sides.

### Admin-Side: Dynamic Form Builder

The primary focus was on empowering administrators with a **dynamic form builder**. Admins can now:

- **Create new questions** for the alumni tracer form.
- **Select the question type** (e.g., text, textarea, select, checkbox, radio).
- **Add options** for questions where applicable (e.g., select, checkbox, radio).

We implemented a user-friendly interface using **Blade components** and **AJAX** for seamless question management without page reloads. Validation rules ensure that each question is properly configured before being saved.

### Public-Side: Alumni Tracer Form Display

On the public-facing page, the alumni tracer form is now **dynamically generated** based on the admin's configuration. Key features include:

- **Real-time rendering** of all question types, including support for required fields and option lists.
- **Responsive design** for accessibility on all devices.
- **Form submission handling** with validation and feedback messages.
- **Data storage** for alumni responses, with plans for future analytics and reporting.

### Technical Highlights

- Leveraged **Eloquent relationships** to link questions, options, and responses.
- Used **Laravel validation** to enforce data integrity both on the admin and public sides.
- Ensured **security** by sanitizing user input and protecting against CSRF attacks.
- Implemented **migration scripts** to support flexible schema changes as the form evolves.

### Challenges and Solutions

- **Dynamic Option Handling:** Managing options for different question types required careful UI logic and backend validation. We used Vue.js for reactive option fields in the admin panel.
- **Data Consistency:** Ensured that changes to questions/options do not break existing alumni responses by removing edit functionality.
- **User Experience:** Iteratively improved the admin UI based on feedback, focusing on clarity and ease of use.
