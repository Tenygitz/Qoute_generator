### Requirements

✔️ Should load a random quote when a user enters the homepage, using endpoint `/random`
✔️ A button which on click generates another quote
✔️ The homepage should load the list of tags in a dropdown by calling `/tags` endpoint
❌ If a tag is selected from dropdown, then use `/random` endpoint and pass the tag query to get the required quote
✔️ Option to bookmark a quote which can be viewed later from another page. This data must be visible in the `/bookmarks` route
✔️ `Redux` must be used to manage the global state
✔️ Should reflect the design, but you are free to make creative improvements
✔️ Should be mobile responsive

### Optional tasks

✔️ Proper loading indicators while an API call is made
❌ Option to remove quotes from the favorite section
✔️ Persist the data in bookmarks page with `localstorage`by storing the quote ids