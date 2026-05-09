<script runat="server">
    Platform.Load("Core", "1.1.1");
    
    try {
        // YOUR CODE HERE
        // - Define a getSegment(subscriber) function
      
       function getSegment(subscriber)
        {
          if(subscriber.IsVIP ==="True"){
             return "Platinum";
          }
          else if(Number(subscriber.TotalSpend) >= 1000){
             return "High Value";
          }
          else if(Number(subscriber.TotalSpend) >= 100){
             return "Active";
          }
          else
            return "New";
           
        }
        // - Init + retrieve
      
      var de = DataExtension.Init("SSJS_Learning_Subscribers");
      var rows = de.Rows.Retrieve();
        // - Counters for each segment
        var platinumCount = 0;
        var highValueCount = 0;
        var activeCount = 0;
        var newCount = 0;
        // - Loop, classify, print, count
      for(var i=0;i<rows.length;i++)
       {
         var segment = getSegment(rows[i]);
         Platform.Response.Write(rows[i].FirstName+": "+segment+"<br>");
         
         switch (segment) {
            case "Platinum":
                platinumCount++;
                break;
            case "High Value":
                highValueCount++;
                break;
            case "Active":
                activeCount++;
                break;
            case "New":
                newCount++;
                break;
         }
       }
        // - Print summary at end
        Platform.Response.Write("<br><br>Summary:<br>");
        Platform.Response.Write("Platinum: "+platinumCount+"<br>");
        Platform.Response.Write("High Value: "+highValueCount+"<br>");
        Platform.Response.Write("Active: "+activeCount+"<br>");
        Platform.Response.Write("New: "+newCount+"<br>");
    } catch (e) {
        Platform.Response.Write("ERROR: " + Stringify(e));
    }
</script>
