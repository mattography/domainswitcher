var trackID,
    domain = window.location.hostname,
    tID = ["UA-XXXXXXXX-1", "UA-XXXXXXXX-1", "UA-XXXXXXXX-2"]; //DEV, QA, APP

  if(domain == "dev.url.com")               //if domain is dev.url.com
    	trackID = tID[0];                   //track ID at array location 0
	else if(domain == "qa.url.com")     //if domain is qa.url.com
    	trackID = tID[1];            	    //track ID at array location 1
	else if(domain == "app.url.com")    //if domain is app.url.com
    	trackID = tID[2];		    //track ID at array location 2
	var _gaq=[['_setAccount', trackID],['_trackPageview']];
