$("body").append($("<div>").addClass("container").append($("<h1>").text("Todo List")).append($("<input>").addClass("inp")).append($("<button>").addClass("btn").text("Click Me").click(()=>{$(".taskList").append($("<li>").addClass("item").append($("<div>").addClass("taskInput").append($("<input>").attr("type","checkbox").addClass("checkbox")).append($("<span>").addClass("task").text($(".inp").val()))).append($("<div>").addClass("buttons").append($("<span>").addClass("upArrow").text("↑").click(function(){let a=$(this).parent().parent();console.log(a),$(a).insertBefore(a.prev())})).append($("<span>").addClass("downArrow").text("↓").click(function(){let a=$(this).parent().parent();console.log(a),$(a).insertAfter(a.next())})).append($("<span>").addClass("deleteTask").text("\uD83D\uDDD1").click(function(){$(this).parent().parent().remove()}))))})).append($("<div>").addClass("taskList")));