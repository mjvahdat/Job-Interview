function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gqJlPXgXRd":
        Script1();
        break;
  }
}

function Script1()
{
  var today = new Date();

var dayOfWeek = today.getDay(); // Sunday=0, Monday=1, Tuesday=2, etc.

var daysUntilTuesday = (2 - dayOfWeek + 7) % 7;

// If today is Tuesday, get next week's Tuesday instead of today
if (daysUntilTuesday === 0) {
    daysUntilTuesday = 7;
}



var nextTuesday = new Date(today);

nextTuesday.setDate(today.getDate() + daysUntilTuesday);



// Format the date (e.g., September 1, 2026)
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = nextTuesday.toLocaleDateString('en-US', options);



// Send the date to Storyline
var player = GetPlayer();
player.Set

Var("NextTuesday", formattedDate);
```



### Step 3: Test the Course
* Publish the course and host it on a web server or LMS. (JavaScript date functions may not display properly if you just preview locally from your computer hard drive).

<FollowUp>
If you want the date formatted differently (like `MM/DD/YYYY` or `DD-MM-YYYY`), let me know and I can adjust the **date format string** in the code for you.
</FollowUp>

}

