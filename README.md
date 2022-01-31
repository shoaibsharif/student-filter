# Coding Test for Frontend/UI Developer

Ensue LLC, Irving, TX

## Intro

Create a completely functional app with proper components/modules that lists college departments and its respective subjects as filter options. The app should display the filtered data (students) when a particular option is selected. For easy navigation and space saving, the filter navigation always remains only in one line, while providing enough data about the current state of filters. Only when filter drop-down option is activated, all the available filter options should be displayed.

### Preferred Platforms

Please use any of these platforms/languages if possible.

- Raw JavaScript or TypeScript
- JS Platforms: Angular, React

### JSON/Provided Data

- Departments and subjects listing data are provided in a file named departments.json
- Students information data are provided in a file named students.json
- Styles(SCSS and compiled css) + 4 html markup files are provided.

## Task Description

1.  Use the provided JSON to create local service calls
2.  Default load, should load all students of all departments and should display data for each student as shown in view1.html
3.  Filter option can be triggered by pressing the [+] button on the top right of view1.html. When triggered it should look like view2.html. College department and its respective subjects behave as filter options and should be binded with the data file provided. Whenever the filter section is in expanded mode with all departments and filters shown, the current applied filter for subjects and departments should be in active state.
4.  [+] button now has changed to [-] which should at any point of operation close the open filter and load the default view with current selections.
5.  When a specific subject is selected, the filter should go back to "filter applied" mode as in view3.html format, while listing matching students for the selected subject. The selected â€œsubjectâ€ should always be the **active subject** and **first listed subject**. Other subjects, if they exist in the department, should be shown after the selected subject, but
    - The filter list should not exceed 1 line. Refer view3.html format.
    - If there are more items than the available space can accommodate, a â€œ+x moreâ€ text should be displayed where x is the number of subjects not shown for that particular department. Refer to view3.html.
      - The calcuation of available space and display of " + x more" should be dynamic. When we swap out the json file with a different json (similar structure, different data), the available space should be used dynamically as much as possible.
      - When clicked on â€œ+x moreâ€, it should show the rest of the subjects as demonstrated in view4.html.
      - In view4.html, user should be able to click the [collapse] button to go back to single line filter mode.
      - In both view3.html and view4.html, user is always able to click the [+] button on the right to view the full list of filters, and when expanded, click on [-] button to go back to the 1 line view.
      - Once any subject has been activated and filtered result shown - the filter list should go back to one line mode (view3.html format), but with the active/selected subject as the first selected subject.
      -
6.  If there are no corresponding students for a selected department/subject combo - "No data available" should be displayed.

## IMPORTANT - PLEASE NOTE THE FOLLOWING:

- Names should be displayed as familyName, givenName
- Mentor name should be displayed as familyName, givenName
- DOB should be displayed in the following format: mm/dd/yyyy
- Admit Date should be displayed in the following format: Jun 11, 1982
- Anticipated Graduation date should be displayed in the following format: Jun 2019

## Time Limit : Self paced. 2 - 4hrs

##### STRETCH GOAL 1 [QUERY PARAMS]

#### Capability to supply URL query parameters to set filters

- Any filter applied by the UI should be appended in the URL as query params
- URL query params should be executable example ?department=aaa&subject=bbb

##### STRETCH GOAL 2 [Programmatic Truncation and Tooltip]

- Some departments have a long name. The ones that have the long name and don't fit have been truncated using Stylesheet. There is a commented markup and styles for department-name-tooltip in view3.html. Convert the tooltip into a component for all department names that have been truncated. When you hover over the truncated department name, the tooltip should appear on top with its full name.

##### STRETCH GOAL 3 - [BEM Conversion]

- BEM is a methodology. http://getbem.com/ + Points to convert markup and stylesheet according to BEM naming.

#### OUR TEST PROCEDURES:

- Is the Application working (Y/N)
- Does the application fulfill all basic goals (Y/N) (1-10 scale)
- Is the Application & Code Structured properly (Y/N) (1-10 scale)
- Select subject and display single row quick switch bar with 'x more subjects' (Y/N)
- Show filtered results for correct cases (Y/N)
- Show 'No available data' for correct cases (Y/N)
- On clicking 'x more' and selecting a subject, switch back to single row quick switch bar with "x more subjects" (Y/N) (1-10 scale)
- Select all subjects (Y/N)
- Test with different set of data and pass (Y/N) (1-10 scale)
- Stretch Goal 1 (Y/N) (1-10 scale)
- Stretch Goal 2 (Y/N) (1-10 scale)
- Stretch Goal 3 (Y/N) (1-10 scale)
- REST service call (Y/N)
- Separate sevice calls/ components to display original and filtered data (Y/N) (1-10 scale)
- UI Logic Quality - Subject switching logic (1-10 scale)
- UI Logic Quality - Filtration logic (1-10 scale)
- UI Logic Quality - Query Parameters (1-10 scale)
- Cleanliness/Organization of Code (1-10 scale)
- Best Practices (1-10 scale)

##### SUBMISSION GUIDELINES

You can submit the uncompiled App with source code - sans node modules either via a zip file/repository link or you can post it on any of the code playground platforms such as Plnkr, JSFiddle, CodePen, JSBin etc. If there are specific instructions required please post, but ideally, we would like to be able to run the application by running the html file, or commands, _npm install_ & _npm start_.

**THANK YOU FOR YOUR PRECIOUS TIME. HAPPY CODING**
