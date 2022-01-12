export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "employer",
      title: "Employer",
      type: "reference",
      to: { type: "employer" },
    },
    {
      name: "label",
      title: "Tab Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobType",
      title: "Job Type",
      type: "reference",
      to: { type: "jobType" }
    },
    {
      name: "fromDate",
      title: "From",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
        calendarTodayLabel: "Today"
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "toDate",
      title: "To",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
        calendarTodayLabel: "Today"
      },
    },
    {
      name: "currentlyInRole",
      title: "Currently in role?",
      type: "boolean",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "workHighlights",
      title: "Work Highlights",
      type: "blockContent",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      readOnly: true,
      initialValue: (new Date()).toISOString(),
    },
  ],
  preview: {
    select: {
      title: "label",
    },
  },
}
