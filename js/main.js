//exports
	//$(".modal").addClass("uk-animation-fade uk-animation-fast");
	//$("tr").hover();
	//$("tr").addClass("uk-animation-scale-up uk-animation-fast");
	$("hr").addClass("uk-divider-icon");
	$(".modal-title").addClass("uk-text-primary");
	
	// $( "#globalmtipdueText" ).datepicker();
   
 
	var act;
	
	function saveToHistory(dir, user, act, actdate){
		
		
		  
		 if(dir){
			 var hislog = dir + act + user + " " + actdate;
			 var historylogRef = firebase.app().database().ref('/Global/CvHistoryLogs/');
			 historylogRef.push().set({
				 Log: hislog
			 });

		 }
	}
	
	function saveToHistoryCg(dir, user, act, actdate){
		
		
		  
		 if(dir){
			 var hislog = dir + act + user + " " + actdate;
			 var historylogRef = firebase.app().database().ref('/Global/CgHistoryLogs/');
			 historylogRef.push().set({
				 Log: hislog
			 });

		 }
	}
	
	
	
	$("#CvLogs-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('cv-logs-div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
    a.download = 'GlobalCvLogsBackup - ' + date + '.xls';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});

$("#CgLogs-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('cg-logs-div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
    a.download = 'GlobalCgLogsBackup - ' + date + '.xls';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});
	
	$("#Global-Cv-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('global-cv-div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
    a.download = 'GlobalCvBackup - ' + date + '.xls';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});

$("#Cv-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('cv_body_div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
	 a.download = 'CvBackup - ' + date + '.xls';
    //.download = 'CvBackup.xlsx';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});



	$("#Global-Cg-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('global-cg-div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
    a.download = 'GlobalCgBackup - ' + date + '.xls';
    //a.download = 'GlobalCgBackup.xlsx';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});


$("#Cg-Export-btn").click(function(e) {

    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('cg_body_div');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    //setting the file name
	exportDate();
    a.download = 'CgBackup - ' + date + '.xls';
    //a.download = 'CgBackup.xlsx';
    //triggering the function
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});


	$('#filterSuccessModal').click(function(){
		$('#filterSuccessModal').modal("hide");
		reload();
	});

	$('#filter-success-btn').click(function(){
		$('#filterSuccessModal').modal("hide");
		reload();
	});

$('#ErrorModal').click(function(){
		$('#ErrorModal').modal("hide");
		reload();
	});

	$('#error-btn').click(function(){
		$('#ErrorModal').modal("hide");
		reload();
	});

	$('#SuccessModal').click(function(){
		$('#SuccessModal').modal("hide");
		//reload();
	});

	$('#success-btn').click(function(){
		$('#SuccessModal').modal("hide");
		//reload();
	});


	$('#addingSuccessModal').click(function(){
		$('#addingSuccessModal').modal("hide");
		reload();
	});

	$('#adding-success-btn').click(function(){
		$('#SuccessModal').modal("hide");
		reload();
	});



	$('#SignUpSuccessModal1').click(function(){

		var user = firebase.auth().currentUser;
		 name = user.displayName;
					 emailTemp = user.email;
					 photo = user.password;

		 var emailpos = emailTemp.indexOf("@");
		 var trimEmail = emailTemp.slice(0,emailpos);
		 var email = trimEmail.split('.').join('');
		 var filterStatus = "All";
		 firebase.database().ref('Users/' + email + '/Global_Cg_Filter/Filter').set({
			 Filter: filterStatus
			 });

		 firebase.database().ref('Users/' + email + '/Global_Cv_Filter/Filter').set({
			 Filter: filterStatus
			 });

		 firebase.database().ref('Users/' + email + '/Cv_Filter/Filter').set({
			 Filter: filterStatus
			 });
		 firebase.database().ref('Users/' + email + '/Cg_Filter/Filter').set({
			 Filter: filterStatus
			 });

		 var currentActiveTab =  "#global-tab";
		 var currentActiveCnt = "#global-cont";
		 firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
			 Active: currentActiveTab,
			 Content: currentActiveCnt
			 });

			 var initcurrentSubActiveTab =  "#global-cv-tab";
			 var initcurrentSubActiveCnt = "#global-cv-cont";
			 firebase.database().ref('Users/' + email + '/CurrentSubActiveTab/Active').set({
				 Active: initcurrentSubActiveTab,
				 Content: initcurrentSubActiveCnt
				 });

	 $('#SignupSuccessModal').modal("hide");

	});

	function initializeNewUSer(){
		var user = firebase.auth().currentUser;
			name = user.displayName;
           emailTemp = user.email;
           photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var filterStatus = "All";
			firebase.database().ref('Users/' + email + '/Global_Cg_Filter/Filter').set({
 			 Filter: filterStatus
 			 });

 		 firebase.database().ref('Users/' + email + '/Global_Cv_Filter/Filter').set({
 			 Filter: filterStatus
 			 });

			firebase.database().ref('Users/' + email + '/Cv_Filter/Filter').set({
				Filter: filterStatus
			  });
			firebase.database().ref('Users/' + email + '/Cg_Filter/Filter').set({
				Filter: filterStatus
			  });

			var currentActiveTab =  "#global-tab";
			var currentActiveCnt = "#global-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
				});

				var initcurrentSubActiveTab =  "#global-cv-tab";
				var initcurrentSubActiveCnt = "#global-cv-cont";
				firebase.database().ref('Users/' + email + '/CurrentSubActiveTab/Active').set({
					Active: initcurrentSubActiveTab,
					Content: initcurrentSubActiveCnt
					});

		//$('#SignupSuccessModal').modal("hide");
		$('#SignupSuccessModal').css('visibility','hidden');
	}


	$("#brainstorm").hide();
	$("#links").hide();
	$("#notes").hide();
	//toggle links
	$('#links-btn-toggle').click(function(){
		$('#links').slideToggle();
		$("#brainstorm").hide();
		$("#notes").hide();
	});
	//toggle notes
	$('#notes-btn-toggle').click(function(){
		$('#notes').slideToggle();
		$("#brainstorm").hide();
		$("#links").hide();
	});
	//close notes
	$('.notes-close').click(function(){
		$('#notes').hide();
	});

	//close links
	$('.links-close').click(function(){
		$('#links').hide();
	});

	//toggle chat bubble
	$("#brn-btn").click(function(){
		$("#brainstorm").slideToggle();
		$("#notes").hide();
		$('#links').hide();
	});
	//close chat bubble
	$(".brn-close").click(function(){
		$("#brainstorm").hide();
	});
	//initialization
	//date
			var cvCount= 0;
			var cgCount = 0;
			var dciCount = 0;
			var cvShipCount = 0;
			var cgShipCount = 0;
			var PoCount = 0;
			//get date
			var date;
			shipDate();
				
//manage user
 var user = firebase.auth().currentUser;


    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in.





       // $(".login-cover").hide();
	   $('.card-body').scrollTop($('.card-body')[0].scrollHeight);
		$("#logoutBtn").show();
		$("#userBtn").show();
		$(".navbar").css("visibility", "visible");
		$(".login-cover").css("visibility", "hidden");

         if (user != null) {
           name = user.displayName;
           emailTemp = user.email;
           photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			readCvGlobal();
			readCgGlobal();
			updateCVGlobalDiv();	
			updateCGGlobalDiv();	
		   document.getElementById("Email-display").innerHTML = " " + email ;

			 //get active sub tabs

			 var currSubActive = firebase.database().ref().child('Users/' + email + '/CurrentSubActiveTab');

		 currSubActive.on("child_added", snap => {

			 var activeTab = snap.child("Active").val();
			 var activeContent = snap.child("Content").val();

			 $(activeTab).addClass("active");
			 $(activeContent).addClass("active");
			 $(activeContent).removeClass("fade");
		 });
		   //get active tab



		   var currActive = firebase.database().ref().child('Users/' + email + '/CurrentActiveTab');

			currActive.on("child_added", snap => {

				var activeTab = snap.child("Active").val();
				var activeContent = snap.child("Content").val();

				$(activeTab).addClass("active");
				$(activeContent).addClass("active");
				$(activeContent).removeClass("fade");
			});


		   	//display conversation
			var brnConvo = firebase.database().ref().child("Conversation");

			brnConvo.on("child_added", snap => {

				var convoDate = snap.child("Date").val();
				var convoMsg = snap.child("Message").val();
				var convoUser = snap.child("User").val();

				$("#brn-body").append("<tr style='border-bottom:none;padding:0;margin-top:5%;word-wrap: break-word;'><td  class='left'><span class='pull-left'><img src='http://placehold.it/50/55C1E7/fff&text=U' alt='User Avatar' style='margin-right:10px;' class='chat-img rounded-circle' /></span><div class='chat-body clearfix'><div class='header'><small class='uk-text-success '>" + convoUser + "</small>  <small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + convoDate + "</small></div><p style='padding-left:3%;padding-right:2%;color:#777777;'>"  + convoMsg + "</p></div></td></tr>");
				$('.card-body').scrollTop($('.card-body')[0].scrollHeight);
			});



			//display links
			var linkList = firebase.database().ref().child('Users/' + email + '/MyLinks/Links');

			linkList.on("child_added", snap => {

				var linksDate = snap.child("Date").val();
				var linksTitle = snap.child("Title").val();
				var linksCnt = snap.child("Content").val();

				$("#links-body").append("<tr><td><label for='added-notes-content' class='uk-label uk-label-success'>" + linksTitle + "</label><small class='text-muted pull-right'>" + linksDate + "</small><input  class='uk-input fullwidth' type='text' id='added-links-content' value=" + "'" + linksCnt + "'" + " disabled></td></tr>" );
				$('.card-body').scrollTop($('.card-body')[0].scrollHeight);
			});

			//end


			//display notes
			var notesList = firebase.database().ref().child('Users/' + email + '/MyNotes/Notes');

			notesList.on("child_added", snap => {

				var notesDate = snap.child("Date").val();
				var notesTitle = snap.child("Title").val();
				var notesCnt = snap.child("Content").val();

				$("#notes-body").append("<tr><td><label for='added-notes-content' class='uk-label uk-label-success'>" + notesTitle + "</label><small class='text-muted pull-right'>" + notesDate + "</small><p class='uk-text-small'  id='added-notes-content' disabled>" + notesCnt + "</p></td></tr>" );
				$('.card-body').scrollTop($('.card-body')[0].scrollHeight);
			});

			//end
			//display cv delete Logs


			var deleteCvLogRef =  firebase.database().ref().child('/Global/CvHistoryLogs/');

			deleteCvLogRef.on("child_added", snap => {


				//var dr = snap.child("Directory").val();
				var msg = snap.child("Log").val();
				$("#cv-delete-log-body").append("<tr><td colspan='2'><small>" + msg +"</small></td></tr>");

			});


			//display cg delete Logs


			var deleteCgLogRef =  firebase.database().ref().child('/Global/CgHistoryLogs/');

			deleteCgLogRef.on("child_added", snap => {


				//var dr = snap.child("Directory").val();
				var msg = snap.child("Log").val();
				$("#cg-delete-log-body").append("<tr><td colspan='2'><small>" + msg +"</small></td></tr>");

			});
			//read CV GLOBAL
			//readCvGlobalShip();
			updateCvGlobalShip();
			updateMtipGlobalShip();
			   //display shipping CV
			var CvShipRef =  firebase.database().ref().child("Users/" + email + "/Cv").orderByChild('Due_Printer').equalTo(date);

			CvShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				var ypcode = snap.child("YPPA_Code").val();
				var duetext = snap.child("Due_Printer").val();
				var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				var datetext = snap.child("Date").val();
				var counttext = snap.child("Count").val();
				
				
				var cvlocshiptextcolor;
					
					switch(statustext){
						case "n/a":
							cvlocshiptextcolor = "uk-text-meta";
							break;
						case "Done":
							cvlocshiptextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cvlocshiptextcolor = "uk-text-success";
							break;
						case "Approved":
							cvlocshiptextcolor = "text-success";
							break;
						case "Shipped":
							cvlocshiptextcolor = "text-info";
							break;
						case "Rework":
							cvlocshiptextcolor = "uk-text-danger";
							break;
					
					}
					
				var remarkcolor;
					
					if(remarkstext == "n/a"){
						remarkcolor = "uk-text-meta";
					}else{
						remarkcolor = "text-info";
					}
				
				$("#shipping_body").append("<tr><td>"  + drcode + "</td><td><small>" + drname +  "</small></td><td colspan='2' class='" + remarkcolor + "' >" + remarkstext + "</td><td class='" + cvlocshiptextcolor +"'>" + statustext +"</td></tr>");
				cvShipCount +=1;

				$("#cv-shipping-icon").addClass("faa-flash animated");


				document.getElementById("CvShipCountText").innerHTML = cvShipCount ;

			});
		//end

		


		
		
		


			//end
			//display cv
			//read cv filter

			 var cvfilterRef =  firebase.database().ref().child('Users/' + email + '/Cv_Filter');

			 var cvstatusFilter;
			cvfilterRef.on("child_added", snap => {



				var Cvfilter= snap.child("Filter").val();

				document.getElementById("filter-type").innerHTML = Cvfilter;
				cvstatusFilter = document.getElementById("filter-type").innerHTML;
				var CvRef;
				var cvOrderBy = "Status";

				if (cvstatusFilter == "All"){

					CvRef =  firebase.database().ref().child("Users/" + email + "/Cv").orderByChild("Due_Printer");
				}
				else{
					CvRef =  firebase.database().ref().child("Users/" + email + "/Cv").orderByChild(cvOrderBy).equalTo(cvstatusFilter);

				}



					CvRef.on("child_added", snap => {


					var drcode = snap.child("Directory_Code").val();
					var drname = snap.child("Directory_Name").val();
					var ypcode = snap.child("YPPA_Code").val();
					var duetext = snap.child("Due_Printer").val();
					var remarkstext = snap.child("Remarks").val();
					var statustext = snap.child("Status").val();
					var datetext = snap.child("Date").val();
					var counttext = snap.child("Count").val();
					
					if(remarkstext == null){
						remarkstext = "n/a";
					}
					
					var cvloctextcolor;
					
					switch(statustext){
						case "n/a":
							cvloctextcolor = "uk-text-meta";
							break;
						case "Done":
							cvloctextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cvloctextcolor = "uk-text-success";
							break;
						case "Approved":
							cvloctextcolor = "text-success";
							break;
						case "Shipped":
							cvloctextcolor = "text-info";
							break;
						case "Rework":
							cvloctextcolor = "uk-text-danger";
							break;
					
					}
					
					var remarkcolor;
					
					if(remarkstext == "n/a"){
						remarkcolor = "uk-text-meta";
					}else{
						remarkcolor = "text-info";
					}
					
					$("#cv_body").append("<tr><td class='uk-text-meta'>" + datetext + "</td><td>" + drcode + "</td><td><small>" + drname + "</small></td><td class='uk-text-meta'>" + ypcode + "</td><td>" + duetext + "</td><td colspan='2' class='" + remarkcolor + "'>" + remarkstext + "</td><td class='" + cvloctextcolor +"'>" + statustext +"</td></tr>");
					$("#deletedirectoryText").append("<option >" + drcode + "</option>" );
					$("#updatedirectoryText").append("<option >" + drcode + "</option>" );

					$("#updateRemarksdirectoryText").append("<option >" + drcode + "</option>" );
					cvCount +=1;

					document.getElementById("CvCountText").innerHTML = cvCount ;
				});







			});


			//display cg

			//Cg filter


		 var cgfilterRef =  firebase.database().ref().child('Users/' + email + '/Cg_Filter');
		 var cgstatusFilter;
		cgfilterRef.on("child_added", snap => {



			var Cgfilter= snap.child("Filter").val();

			document.getElementById("cg-filter-type").innerHTML = Cgfilter;
			cgstatusFilter = document.getElementById("cg-filter-type").innerHTML;

			var CgRef;
			var cgOrderBy = "Status";
			if (cgstatusFilter == "All"){
				CgRef =  firebase.database().ref().child("Users/" + email + "/Cg").orderByChild("Due_Printer");
			}
			else{
				CgRef =  firebase.database().ref().child("Users/" + email + "/Cg").orderByChild(cgOrderBy).equalTo(cgstatusFilter);
			}




				// display cg


				CgRef.on("child_added", snap => {

					var drcode = snap.child("Directory_Code").val();
					var drname = snap.child("Directory_Name").val();
					var ypcode = snap.child("YPPA_Code").val();
					var duetext = snap.child("Due_Printer").val();
					var remarkstext = snap.child("Remarks").val();
					var statustext = snap.child("Status").val();
					var datetext = snap.child("Date").val();
					
					if(remarkstext == null){
						remarkstext = "n/a";
					}
					
					var cgloctextcolor;
					
					switch(statustext){
						case "n/a":
							cgloctextcolor = "uk-text-meta";
							break;
						case "Done":
							cgloctextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cgloctextcolor = "uk-text-success";
							break;
						case "Approved":
							cgloctextcolor = "text-success";
							break;
						case "Shipped":
							cgloctextcolor = "text-info";
							break;
						case "Rework":
							cgloctextcolor = "uk-text-danger";
							break;
					
					}
					
					var remarkcolor;
					
					if(remarkstext == "n/a"){
						remarkcolor = "uk-text-meta";
					}else{
						remarkcolor = "text-info";
					}
					
					$("#cg_body").append("<tr><td class='uk-text-meta'>" + datetext + "</td><td>" + drcode + "</td><td><small>" + drname + "</small></td><td class='uk-text-meta'>" + ypcode + "</td><td>" + duetext + "</td><td colspan='2' class='" + remarkcolor +"'>" + remarkstext + "</td><td class='" + cgloctextcolor +"'>" + statustext +"</td></tr>");
					$("#updateRemarksdirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#updatedirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#deletedirectoryTextcg").append("<option >" + drcode + "</option>" );
					cgCount+=1;

					document.getElementById("CgCountText").innerHTML = cgCount ;

				});


				//
		});
		//read CG Global
			//readCgGlobalShip();
			updateCgGlobalShip();

				//display shipping Cg
			var CgShipRef =  firebase.database().ref().child("Users/" + email + "/Cg").orderByChild('Due_Printer').equalTo(date);

			CgShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				var ypcode = snap.child("YPPA_Code").val();
				var duetext = snap.child("Due_Printer").val();
				var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				var datetext = snap.child("Date").val();
				var counttext = snap.child("Count").val();
				
				
				var cglocshiptextcolor;
					
					switch(statustext){
						case "n/a":
							cglocshiptextcolor = "uk-text-meta";
							break;
						case "Done":
							cglocshiptextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cglocshiptextcolor = "uk-text-success";
							break;
						case "Approved":
							cglocshiptextcolor = "text-success";
							break;
						case "Shipped":
							cglocshiptextcolor = "text-info";
							break;
						case "Rework":
							cglocshiptextcolor = "uk-text-danger";
							break;
					
					}
					
					var remarkcolor;
					
					if(remarkstext == "n/a"){
						remarkcolor = "uk-text-meta";
					}else{
						remarkcolor = "text-info";
					}
				
				$("#Cgshipping_body").append("<tr><td>"  + drcode + "</td><td><small>" + drname +  "</small></td><td colspan='2' class='" + remarkcolor +"'>" + remarkstext + "</td><td class='" + cglocshiptextcolor + "'>" + statustext +"</td></tr>");
				cgShipCount +=1;
				$("#cg-shipping-icon").addClass("faa-flash animated");
				document.getElementById("CgShipCountText").innerHTML = cgShipCount ;

			});

		   //display Po Reports
			var PoRef =  firebase.database().ref().child("Users/" + email + "/Dci").orderByChild('Due_Printer').equalTo(date);

			PoRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var statustext = snap.child("Status").val();

				$("#dciPo_body").append("<tr><td>"  + drcode + "</td><td>"  + statustext +"</td></tr>");
				PoCount+=1;
				document.getElementById("dciPOCountText").innerHTML = PoCount ;
				$("#po-due-icon").addClass("faa-flash animated");

			});

			//end


		   //display dci
		 var DciRef =  firebase.database().ref().child("Users/" + email + "/Dci").orderByChild('Due_Printer');

		DciRef.on("child_added", snap => {

			var drcode = snap.child("Directory_Code").val();

			var duetext = snap.child("Due_Printer").val();

			var statustext = snap.child("Status").val();
			var datetext = snap.child("Date").val();
			$("#dci_body").append("<tr><td>" + datetext + "</td><td>" + drcode + "</td><td>"  + duetext + "</td><td>" + statustext +"</td></tr>");
			//$("#updateRemarksdirectoryTextcg").append("<option >" + drcode + "</option>" );
			$("#updatedirectoryTextdci").append("<option >" + drcode + "</option>" );
			$("#deletedirectoryTextdci").append("<option >" + drcode + "</option>" );
			dciCount+=1;
			document.getElementById("dciCountText").innerHTML = dciCount ;

		});

		//activity log

		 var ActRef =  firebase.database().ref().child("Users/" + email + "/Activity_Log").orderByChild('Date').limitToLast(50);

		ActRef.on("child_added", snap => {

			var drcode = snap.child("Directory_Code").val();


			var actVol = snap.child("Volume").val();


			var datetext = snap.child("Date").val();
			$("#act_body").append("<tr><td>" + datetext + "</td><td>" + drcode + "</td><td>"  + actVol +"</td></tr>");
			//$("#updateRemarksdirectoryTextcg").append("<option >" + drcode + "</option>" );

			$("#deletedirectoryTextact").append("<option >" + drcode + "</option>" );
			//dciCount+=1;
			//document.getElementById("dciCountText").innerHTML = dciCount ;

		});

		//end


         }

      } else {
        // No user is signed in.
         // $(".login-cover").show();

		  $(".login-cover").css("visibility", "visible");
          $("#loginProgress").hide();
          $("#loginBtn").show();
      }
      });

//display email



var signOutBtn = document.getElementById("signOut");
//sign out
signOutBtn.addEventListener("click", SignOut)
function SignOut (e){
	  e.preventDefault();
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }, function(error) {
        window.alert(error.message);

      });

	   reload();
		}

//get login user info

	 $("#loginBtn").click(
        function(){

          var email = $("#loginEmail").val();
          var password = $("#loginPassword").val();

          if(email != "" && password != ""){
              $("#loginProgress").show();
              $("#loginBtn").hide();


              firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

              $("#loginError").show().text(error.message);
              $("#loginProgress").hide();


              $("#loginBtn").show();

              });




          }else{
			  $("#loginError").show().text('Please Fill Up Fields');
		  }

        }
      );

//login using keypress
		$('#loginPassword').keypress(function(e) {
					if (e.which == 13) {
					  //e.preventDefault();
					  var email = $("#loginEmail").val();
				  var password = $("#loginPassword").val();

				  if(email != "" && password != ""){
					  $("#loginProgress").show();
					  $("#loginBtn").hide();

					  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

					  $("#loginError").show().text(error.message);
					  $("#loginProgress").hide();


					  $("#loginBtn").show();

					  });


				  }else{
					  $("#loginError").show().text('Please Fill Up Fields');
				  }




					}
				  });


//sign up

	function signUp(){
		$('#signUpProgress').show();
		$('#signUp-btn').hide();
		$('#signup-close-btn').hide();
		var email = document.getElementById('signUpEmail').value;
		var password = document.getElementById('signUpPassword').value;
		var cnfirmpassword = document.getElementById('signUpConfirmPassword').value;
		var checkError = 0;
		var errorCode;
		var errorMessage;
		if(email != "" && password != "" && cnfirmpassword != "" && cnfirmpassword == password){



					firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {

		     // [END createwithemail]
		     // callSomeFunction(); Optional
		     // var user = firebase.auth().currentUser;
				 $('#SignupSuccessModal').css('visibility','visible');
				 $('#signUpModal').modal("hide");

		 }, function(error) {
		     // Handle Errors here.
		     var errorCode = error.code;
		     var errorMessage = error.message;
		     // [START_EXCLUDE]
		     if (errorCode == 'auth/weak-password') {
		        // alert();
						$("#signUpError").show().text('The password is too weak.');
						 $('#signUpProgress').hide();
						 $('#signUp-btn').show();
						 $('#signup-close-btn').show();
		     } else {
		         //alert(errorMessage);
						  $('#signUpProgress').hide();
							$('#signUp-btn').show();
							$('#signup-close-btn').show();
						 $("#signUpError").show().text(error.message);
		     }
		     // [END_EXCLUDE]
		 });


		}
		else if(cnfirmpassword != "" && password != "" && cnfirmpassword != password){
			$("#signUpError").show().text("Password does not match");
			$('#signUpProgress').hide();
			$('#signUp-btn').show();
			$('#signup-close-btn').show();
		}
		else if(email == "" || password == "" || cnfirmpassword == "" || cnfirmpassword == "" || password == ""){
			$("#signUpError").show().text("Please fill up all fields");
			$('#signUpProgress').hide();
			$('#signUp-btn').show();
			$('#signup-close-btn').show();
		}





	}




		//reset
		 function sendPasswordReset() {
		  var email = document.getElementById('resetEmail').value;
		  // [START sendpasswordemail]
		  firebase.auth().sendPasswordResetEmail(email).then(function() {
			// Password Reset Email Sent!
			// [START_EXCLUDE]
			$('#SuccessModal').modal("show");
			$('#resetModal').modal("hide");
			// [END_EXCLUDE]
		  }).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// [START_EXCLUDE]
			if (errorCode == 'auth/invalid-email') {
			  alert(errorMessage);
			} else if (errorCode == 'auth/user-not-found') {
			  alert(errorMessage);
			}
			console.log(error);
			// [END_EXCLUDE]
		  });
		  // [END sendpasswordemail];
		}







		
		



		


		//save active tab
		$('#global-cv-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#global-cv-tab";
			var currentActiveCnt = "#global-cv-cont";
			firebase.database().ref('Users/' + email + '/CurrentSubActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
				});



		});

		$('#global-cg-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#global-cg-tab";
			var currentActiveCnt = "#global-cg-cont";
			firebase.database().ref('Users/' + email + '/CurrentSubActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
				});



		});


		$('#global-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#global-tab";
			var currentActiveCnt = "#global-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
				});



		});


		$('#cv-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');

			var currentActiveTab =  "#cv-tab";
			var currentActiveCnt = "#cv-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});

		$('#cg-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');

			var currentActiveTab =  "#cg-tab";
			var currentActiveCnt = "#cg-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});

		$('#dci-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#dci-tab";
			var currentActiveCnt = "#dci-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});

		$('#act-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#act-tab";
			var currentActiveCnt = "#act-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});


		$('#errorLink-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#errorLink-tab";
			var currentActiveCnt = "#errorLink-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});
		$('#shippingSchedLink-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#shippingSchedLink-tab";
			var currentActiveCnt = "#shippingSchedLink-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
			  });



		});

		$('#Adherence-tab').click(function(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var currentActiveTab =  "#Adherence-tab";
			var currentActiveCnt = "#Adherence-cont";
			firebase.database().ref('Users/' + email + '/CurrentActiveTab/Active').set({
				Active: currentActiveTab,
				Content: currentActiveCnt
				});



		});





		//send data
		var directoryText = document.getElementById("directoryText");
		var directoryNameText = document.getElementById("directoryNameText");
		var ypText = document.getElementById("ypText");
		var dueText = document.getElementById("dueText");
		var remarksText = document.getElementById("remarksText");
		var statusText = document.getElementById("statusText");

		//global cv

		function save_Data_Global(){
			var period = "";
				var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			var drTemp = $('#globaldirectoryText').val();
				var drText = drTemp.trim();
			var dnameText = $('#globaldirectoryNameText').val();
			var ypcodeText = $('#globalypText').val();
			var duetext = $('#globaldueText').val();
			var due_TempDay = duetext.slice(5,7);
			var due_TempMonth = duetext.slice(8,10);
			var due_TempYear = duetext.slice(2,4);
			duetext = due_TempDay + "/" + due_TempMonth + "/" + due_TempYear;
			
			var mtipduetext = $('#globalmtipdueText').val();
			var mdue_TempDay = mtipduetext.slice(5,7);
			var mdue_TempMonth = mtipduetext.slice(8,10);
			var mdue_TempYear = mtipduetext.slice(2,4);
			mtipduetext = mdue_TempDay + "/" + mdue_TempMonth + "/" + mdue_TempYear;
			
			if(mtipduetext == "//"){
				mtipduetext = "n/a";
			}
			
			
			
			//var remarkstext = remarksText.value;
			var statustext = $('#globalstatusText').val();
			
			var mtipstatustext = $('#globalmtipstatusText').val();
			var tipstatustext = $('#globaltipstatusText').val();
			var tabstatustext = $('#globaltabstatusText').val();
			var amdstatustext = $('#globalamdocsstatusText').val();
			var note = "";
			var artist = "";
			var proofer = "";
			
			
			if(drText && dnameText && ypcodeText && duetext !== "//" && statustext ){
				 var dataid = drText;
				if(mtipduetext == ""){
					mtipduetext = "n/a";
				}
				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Added by " + email + "  " + date;
				 //
				 var data = {
			Date: date,
				Directory_Code: drText,
				Directory_Name: dnameText,
				YPPA_Code: ypcodeText,
				Mtip_Due_Printer: mtipduetext,
				Due_Printer: duetext,
				Status: statustext,
				Mtip_Status: mtipstatustext,
				Tip_Status: tipstatustext,
				Tip_Status: tipstatustext,
				Tab_Status: tabstatustext,
				Amdocs: amdstatustext,
				Notes: note,
				
				Email: refineEmail
				 }
				 
				 var updates = {};
				 updates['/Global/Cv/' + dataid] = data;
				 firebase.database().ref().update(updates);
				 //save to history
				 act = " added by ";
				 saveToHistory(drText, email, act, date);
				 document.getElementById("globaldirectoryText").value="";
				 document.getElementById("globaldirectoryNameText").value="";
				 document.getElementById("globalypText").value="";
				 document.getElementById("globaldueText").value="";
				 document.getElementById("globalmtipdueText").value="";
				// document.getElementById("globalstatusText").value="";

				 $('#SuccessModal').modal("show");
				 $('#globaladdDataModal').modal("hide");
			 }
			 
			 
			 else if(duetext == "//"){
				 alert("Please Fill up Cover Due at Printer");
				
			}
			 
			 
			 else{
				 alert("Please Fill up all Fields");
			 }
			}
			//end
			//update status (globalCv)
			function update_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globalupdatestatusText').val();
					if(drText && statustext){
						
							
							//save to history
							 act = " CV Status updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Status:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}

		//update  globalmtip
		
		
		function update_Mtip_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalmtipupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globalmtipupdatestatusText').val();
					if(drText && statustext){
						
							
							
							//save to history
							 act = " Mtip Status updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							 
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Mtip_Status:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalmtipupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}
				
				
			function update_tip_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globaltipupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globaltipupdatestatusText').val();
					if(drText && statustext){
						
							
							
							//save to history
							 act = " Tip Status updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							 
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Tip_Status:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globaltipupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}
				
				
			function update_tab_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globaltabupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globaltabupdatestatusText').val();
					if(drText && statustext){
						
							//save to history
							 act = " Tab Status updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Tab_Status:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globaltabupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}
				
				
				
				
				function update_amdocs_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalamdocsupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globalamdocsupdatestatusText').val();
					if(drText && statustext){
						
							//save to history
							 act = " Amdocs Status updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Amdocs:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalamdocsupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}
			
			
			
			function update_note_Status_Global(){

				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalnotesupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var statustext = $('#globalnotesupdatestatusText').val();
					if(drText && statustext){
						
							//save to history
							 act = " Note updated to " + statustext + " by " ;
							 saveToHistory(drText, email, act, date);
							
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Notes:statustext,
								Email: refineEmail
							})
						/*
							DataRef.on("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								var counttext = snap.child("Count").val();
								var emailtext = refineEmail;
								
								DataRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: statustext,
									Count: 1,
									Email: refineEmail
								 })

							});
							*/
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalnotesupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
				}
		
				
				
				
			//GLOBAL Cg

			function save_DataCg_Global(){
		  //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');

			 //
			var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			var refineEmail = "Added by " + email + "  " + date;
		    var drText = $('#globaldirectoryCgText').val();
			var dnameText = $('#globaldirectoryNameCgText').val();
			var ypcodeText = $('#globalypCgText').val();
			var duetext = $('#globaldueCgText').val();
			
			var due_TempDay = duetext.slice(5,7);
			var due_TempMonth = duetext.slice(8,10);
			var due_TempYear = duetext.slice(2,4);
			duetext = due_TempDay + "/" + due_TempMonth + "/" + due_TempYear;
			
			
			//var remarkstext = remarksCgText.value;
			var statustext = $('#globalstatusCgText').val();
			var transstatustext = $('#globaltransstatusCgText').val();
			var amdstatustext = $('#globalamdstatusCgText').val();
			var nucstatustext = $('#globalnucstatusCgText').val();
			var notestext = "";
			var artist = "";
			var proofer = "";
			
			
			
      if(drText && dnameText && ypcodeText && duetext != "//" && statustext ){
  		   var dataid = drText;
			

  		   var data = {
			Date: date,
  			Directory_Code: drText,
  			Directory_Name: dnameText,
  			YPPA_Code: ypcodeText,
  			Due_Printer: duetext,
			Transmittal: transstatustext,
			Amdocs: amdstatustext,
			Nuclear: nucstatustext,
  			Status: statustext,
			Email: refineEmail,
			
			Notes:notestext
  		   }
			//save to history
			 act = " added by " ;
			saveToHistoryCg(drText, email, act, date);
			
  		   var updates = {};
  		   updates['/Global/Cg/' + dataid] = data;
  		   firebase.database().ref().update(updates);
           document.getElementById("globaldirectoryCgText").value="";
           document.getElementById("globaldirectoryNameCgText").value="";
           document.getElementById("globalypCgText").value="";
           document.getElementById("globaldueCgText").value="";
           //document.getElementById("globalstatusCgText").value="";

  		   $('#SuccessModal').modal("show");
  		   $('#globaladdDataCgModal').modal("hide");

       }
	   
	   else if(duetext == "//"){
				 alert("Please Fill up Due at Printer");
			}
	   
       else{
         alert("Please Fill up all Fields");
       }
		  }

		//status global cg
			function update_StatusCg_Global(){
				var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var refineEmail = "Updated by " + email + " " + date;
			 //
  		  var drText = $('#globalupdatedirectoryTextcg').val();
  			//var remarkstext = remarksText.value;
  			var statustext = $('#globalupdatestatusTextcg').val();
        if(drText && statustext){
			
			//save to history
			act = " CIG Status updated to " + statustext + " by " ;
			saveToHistoryCg(drText, email, act, date);
			
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Global/Cg/' + drText);
            DataRef.update({
              Status:statustext,
			  Email: refineEmail
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#SuccessModal').modal("show");
			  $('#globalupdateStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }
		  
		  
		  //notes global cg
			function update_NotesStatusCg_Global(){
				var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var refineEmail = "Updated by " + email + " " + date;
			 //
  		  var drText = $('#globalnotesupdatedirectoryTextcg').val();
  			//var remarkstext = remarksText.value;
  			var statustext = $('#globalnotesupdatestatusTextcg').val();
        if(drText && statustext){
			
			//save to history
				act = " Notes updated to " + statustext + " by " ;
				saveToHistoryCg(drText, email, act, date);
			
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Global/Cg/' + drText);
            DataRef.update({
              Notes:statustext,
			  Email: refineEmail
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#SuccessModal').modal("show");
			  $('#globalnotesupdateStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }
		  
		  
		  //transmittal status global cg
			function update_TransStatusCg_Global(){
				var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var refineEmail = "Updated by " + email + " " + date;
			 //
  		  var drText = $('#globalupdatetransdirectoryTextcg').val();
  			//var remarkstext = remarksText.value;
  			var statustext = $('#globalupdatetransstatusTextcg').val();
        if(drText && statustext){
			
			//save to history
				act = " Transmittal Status updated to " + statustext + " by " ;
				saveToHistoryCg(drText, email, act, date);
			
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Global/Cg/' + drText);
            DataRef.update({
              Transmittal:statustext,
			  Email: refineEmail
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#SuccessModal').modal("show");
			  $('#globalupdatetransStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }
		  
		  
		  
		   //nuclear status global cg
			function update_NucStatusCg_Global(){
				var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var refineEmail = "Updated by " + email + " " + date;
			 //
  		  var drText = $('#globalupdatenucdirectoryTextcg').val();
  			//var remarkstext = remarksText.value;
  			var statustext = $('#globalupdatenucstatusTextcg').val();
        if(drText && statustext){
			
			//save to history
			act = " Nuclear Status updated to " + statustext + " by " ;
			saveToHistoryCg(drText, email, act, date);
			
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Global/Cg/' + drText);
            DataRef.update({
              Nuclear:statustext,
			  Email: refineEmail
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#SuccessModal').modal("show");
			  $('#globalupdatenucStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }
		  
		  
		  
		   //amdocs status global cg
			function update_AmdStatusCg_Global(){
				var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var refineEmail = "Updated by " + email + " " + date;
			 //
  		  var drText = $('#globalupdateamddirectoryTextcg').val();
  			//var remarkstext = remarksText.value;
  			var statustext = $('#globalupdateamdstatusTextcg').val();
        if(drText && statustext){
			
			//save to history
			 act = " Amdocs Status updated to " + statustext + " by " ;
			saveToHistoryCg(drText, email, act, date);
			
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Global/Cg/' + drText);
            DataRef.update({
              Amdocs:statustext,
			  Email: refineEmail
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#SuccessModal').modal("show");
			  $('#globalupdateamdStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }

//global cg end

		function save_Data(){
			var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;
			var drTemp = directoryText.value;
		    var drText = drTemp.trim();
			var dnameText = directoryNameText.value;
			var ypcodeText = ypText.value;
			var duetext = dueText.value;
			
			var due_TempDay = duetext.slice(5,7);
			var due_TempMonth = duetext.slice(8,10);
			var due_TempYear = duetext.slice(2,4);
			duetext = due_TempDay + "/" + due_TempMonth + "/" + due_TempYear;
			
			
			var remarkstext = remarksText.value;
			var statustext = statusText.value;
			
			
			
      if(drText && dnameText && ypcodeText && duetext != "//" && remarkstext && statustext ){
  		   var dataid = drText;


  		   var data = {
			Date: date,
  			Directory_Code: drText,
  			Directory_Name: dnameText,
  			YPPA_Code: ypcodeText,
  			Due_Printer: duetext,
  			Remarks: remarkstext,
  			Status: statustext,
			Count: 1
  		   }
		   //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
  		   var updates = {};
  		   updates['/Users/' +  email + "/Cv/" + dataid] = data;
  		   firebase.database().ref().update(updates);
         directoryText.value="";
         directoryNameText.value="";
         ypText.value="";
         dueText.value="";
         remarksText.value="";
         //statusText.value="";
  		    $('#addingSuccessModal').modal("show");
  		   $('#addDataModal').modal("hide");
       }
	   else if(duetext == "//"){
		   alert("Please Fill up Due at Printer");
	   }
	   
       else{
         alert("Please Fill up all Fields");
       }
		  }




		function update_Status(){
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
  		  var drText = updatedirectoryText.value;
  			var remarkstext = remarksText.value;
  			var statustext = updatestatusText.value;
        if(drText && statustext){
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Users/' +  email + "/Cv/" + drText);
            DataRef.update({
              Status:statustext,
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#filterSuccessModal').modal("show");
  		   $('#updateStatusModal').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }









      function update_Remarks(){

		   //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
          var drText = updateRemarksdirectoryText.value;
          var remarkstext = updateremarksText.value;
          var statustext = updatestatusText.value;
          if(drText && remarkstext){
              var ref = firebase.app().database().ref();
              var DataRef = ref.child('/Users/' +  email + "/Cv/" + drText);
              DataRef.update({
                Remarks:remarkstext,
              })

              directoryText.value="";
              remarkstext.value="";
              $('#filterSuccessModal').modal("show");
			   $('#updateRemarksModal').modal("hide");
            }
            else{
              alert("Please Fill up all Fields");
            }
        }

	  function confirmCvDel(){
	  var drText = deletedirectoryText.value;
	   if(drText){
          $('#ConfirmModal').modal("show");

        }

	  }
		//global cv confirm delete
		function globalconfirmCvDel(){
	  var drText = $('#globaldeletedirectoryText').val();
	   if(drText){
          $('#globalConfirmModal').modal("show");

        }

	  }
		$('#global-cancel-btn').click(function (){
		 $('#globalConfirmModal').modal("hide");

	 });

	 function delete_Data_Global(){
		 var period = "";
			 var date = new Date();
		 var day = date.getDate();
		 var month = date.getMonth()+1;
		 var yeartemp = date.getFullYear().toString();
		 var year = yeartemp.slice(2,4);
		 var hour = date.getHours();
		 var min = date.getMinutes();
		 var sec = date.getSeconds();
		 var time = hour + ":" + min;

		 if(hour > 11){
			 period = "PM";
		 }else{
			 period = "AM";
		 }

		 if( period == "PM" && hour > 12){
			 hour = hour - 12;
		 }
		 if(hour<10){
			 hour = "0" + hour;
		 }
		 if(min<10){
			 min = "0" + min;
		 }
		 var time = hour + ":" + min;

		 date = month + "/" + day + "/" + year + "    " + time + " " + period;
		//get current user
		var user = firebase.auth().currentUser;
	 emailTemp = user.email;
	 var emailpos = emailTemp.indexOf("@");
	 var trimEmail = emailTemp.slice(0,emailpos);
	 var email = trimEmail.split('.').join('');

		//
		  var drText = $('#globaldeletedirectoryText').val();
		 if(drText){
			 //save to history
			 act = " deleted by " ;
			saveToHistory(drText, email, act, date);
			
			 var ref = firebase.app().database().ref('/Global/Cv/' + drText);
			 ref.remove();
				$('#SuccessModal').modal("show");
			$('#globaldeleteDataModal').modal("hide");
			$('#globalConfirmModal').modal("hide");

		 }
		 else{
				 alert('Fill up Directory Code');
		 }
	 }

	  $('#cancel-btn').click(function (){
			$('#ConfirmModal').modal("hide");

	  });

      function delete_Data(){
		   //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
        var drText = deletedirectoryText.value;
        if(drText){
          var ref = firebase.app().database().ref('/Users/' +  email + "/Cv/" + drText);
          ref.remove();
           $('#filterSuccessModal').modal("show");
  		   $('#deleteDataModal').modal("hide");
  		   $('#ConfirmModal').modal("hide");

        }
        else{
            alert('Fill up Directory Code');
        }
      }


	  //cg

	  function save_DataCg(){
		  //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
			var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;

		    //var drText = directoryCgText.value;
			var drTemp = directoryCgText.value;
		    var drText = drTemp.trim();
			var dnameText = directoryNameCgText.value;
			var ypcodeText = ypCgText.value;
			var duetext = dueCgText.value;
			
			var due_TempDay = duetext.slice(5,7);
			var due_TempMonth = duetext.slice(8,10);
			var due_TempYear = duetext.slice(2,4);
			duetext = due_TempDay + "/" + due_TempMonth + "/" + due_TempYear;
			
			
			var remarkstext = remarksCgText.value;
			var statustext = statusCgText.value;
			
			
			
      if(drText && dnameText && ypcodeText && duetext != "//" && remarkstext && statustext ){
  		   var dataid = drText;


  		   var data = {
			Date: date,
  			Directory_Code: drText,
  			Directory_Name: dnameText,
  			YPPA_Code: ypcodeText,
  			Due_Printer: duetext,
  			Remarks: remarkstext,
  			Status: statustext,
  		   }

  		   var updates = {};
  		   updates['/Users/' +  email + "/Cg/" + dataid] = data;
  		   firebase.database().ref().update(updates);
         directoryCgText.value="";
         directoryNameCgText.value="";
         ypCgText.value="";
         dueCgText.value="";
         //remarksCgText.value="";
         //statusCgText.value="";
  		   $('#addingSuccessModal').modal("show");
  		   $('#addDataCgModal').modal("hide");

       }
	   
	   else if (duetext == "//"){
         alert("Please Fill up Due at Printer");
       }
	   
       else{
         alert("Please Fill up all Fields");
       }
		  }

		 function update_RemarksCg(){
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
          var drText = updateRemarksdirectoryTextcg.value;
          var remarkstext = updateremarksTextcg.value;

          if(drText && remarkstext){
              var ref = firebase.app().database().ref();
              var DataRef = ref.child('/Users/' +  email + "/Cg/" + drText);
              DataRef.update({
                Remarks:remarkstext,
              })

              //directoryTextcg.value="";
              //remarkstextcg.value="";
              $('#filterSuccessModal').modal("show");
			  $('#updateRemarksCgModal').modal("hide");
            }
			
		 else if(duetext == "//"){
				alert("Please Fill up Due at Printer");
			}
			
            else{
              alert("Please Fill up all Fields");
            }

        }

		function update_StatusCg(){
			 //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
  		  var drText = updatedirectoryTextcg.value;
  			var remarkstext = remarksText.value;
  			var statustext = updatestatusTextcg.value;
        if(drText && statustext){
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Users/' +  email + "/Cg/" + drText);
            DataRef.update({
              Status:statustext,
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#filterSuccessModal').modal("show");
			  $('#updateStatusModalcg').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }
			//Global cg Delete

			function confirmCgDel_Global(){

		  var drText = $('#globaldeletedirectoryTextcg').val();
				if(drText){
				 $('#globalConfirmCgModal').modal("show");
				}

		  }

		  $('#global-cancel-cg-btn').click(function (){
				$('#globalConfirmCgModal').modal("hide");
		  });

		   function delete_DataCg_Global(){
				 var period = "";
	 		    var date = new Date();
	 			var day = date.getDate();
	 			var month = date.getMonth()+1;
	 			var yeartemp = date.getFullYear().toString();
	 			var year = yeartemp.slice(2,4);
	 			var hour = date.getHours();
	 			var min = date.getMinutes();
	 			var sec = date.getSeconds();
	 			var time = hour + ":" + min;

	 			if(hour > 11){
	 				period = "PM";
	 			}else{
	 				period = "AM";
	 			}

	 			if( period == "PM" && hour > 12){
	 				hour = hour - 12;
	 			}
	 			if(hour<10){
	 				hour = "0" + hour;
	 			}
	 			if(min<10){
	 				min = "0" + min;
	 			}
	 			var time = hour + ":" + min;

	 			date = month + "/" + day + "/" + year + "    " + time + " " + period;
					//get current user
				   var user = firebase.auth().currentUser;
					emailTemp = user.email;
					var emailpos = emailTemp.indexOf("@");
					var trimEmail = emailTemp.slice(0,emailpos);
					var email = trimEmail.split('.').join('');
					 //
				var drText = $('#globaldeletedirectoryTextcg').val();
				if(drText){
				//save to history
					 act = " deleted by " ;
					saveToHistoryCg(drText, email, act, date);
				  var ref = firebase.app().database().ref('/Global/Cg/' + drText);
				  ref.remove();
				   $('#SuccessModal').modal("show");
				   $('#globaldeleteDataModalcg').modal("hide");
				   $('#globalConfirmCgModal').modal("hide");
				}
				else{
					alert('Fill up Directory Code');
				}
			}


			//end

		  function confirmCgDel(){

		  var drText = deletedirectoryTextcg.value;
				if(drText){
				 $('#ConfirmCgModal').modal("show");
				}

		  }

		  $('#cancel-cg-btn').click(function (){
				$('#ConfirmCgModal').modal("hide");
		  });

		   function delete_DataCg(){
					//get current user
				   var user = firebase.auth().currentUser;
					emailTemp = user.email;
					var emailpos = emailTemp.indexOf("@");
					var trimEmail = emailTemp.slice(0,emailpos);
					var email = trimEmail.split('.').join('');
					 //
				var drText = deletedirectoryTextcg.value;
				if(drText){
				  var ref = firebase.app().database().ref('/Users/' +  email + "/Cg/" + drText);
				  ref.remove();
				   $('#filterSuccessModal').modal("show");
				   $('#deleteDataModalcg').modal("hide");
				   $('#ConfirmCgModal').modal("hide");
				}
				else{
					alert('Fill up Directory Code');
				}
			}

	  // dci

	  function save_DataDci(){
		  //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');

			 //
			var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;

		    var drText = directorydciText.value;
			var duetext = duedciText.value;
			
			var due_TempDay = duetext.slice(5,7);
			var due_TempMonth = duetext.slice(8,10);
			var due_TempYear = duetext.slice(2,4);
			duetext = due_TempDay + "/" + due_TempMonth + "/" + due_TempYear;
			
			var statustext = statusdciText.value;
			
			
      if(drText  && duetext != "//" && statustext ){
  		   var dataid = drText;


  		   var data = {
			Date: date,
  			Directory_Code: drText,
  			Due_Printer: duetext,
  			Status: statustext,
  		   }

  		   var updates = {};
  		   updates['/Users/' +  email + "/Dci/" + dataid] = data;
  		   firebase.database().ref().update(updates);
         directorydciText.value="";
         duedciText.value="";
         //statusText.value="";
  		    $('#addingSuccessModal').modal("show");
			  $('#addDatadciModal').modal("hide");
       }
	   
	    else if(duetext == "//"){
		   alert("Please Fill up Due at Printer");
	   }
	   
       else{
         alert("Please Fill up all Fields");
       }
		  }


		  function confirmDciDel(){

			 var drText = deletedirectoryTextdci.value;
					if(drText){
					 $('#ConfirmDciModal').modal("show");
					}

		  }

		  $('#cancel-dci-btn').click(function (){
				$('#ConfirmDciModal').modal("hide");
		  });

		   function delete_DataDci(){
			   //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
        var drText = deletedirectoryTextdci.value;
        if(drText){
          var ref = firebase.app().database().ref('/Users/' +  email + "/Dci/" + drText);
          ref.remove();
           $('#filterSuccessModal').modal("show");
			  $('#deleteDataModaldci').modal("hide");
			  $('#ConfirmDciModal').modal("hide");
        }
        else{
            alert('Fill up Directory Code');
        }
      }


	  function update_StatusDci(){
		  //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
  		  var drText = updatedirectoryTextdci.value;

  			var statustext = updatestatusTextdci.value;
        if(drText && statustext){
            var ref = firebase.app().database().ref();
            var DataRef = ref.child('/Users/' +  email + "/Dci/" + drText);
            DataRef.update({
              Status:statustext,
            })

            //directoryText.value="";
            //statusText.value="";
      		   $('#filterSuccessModal').modal("show");
			  $('#updateStatusModaldci').modal("hide");
          }
          else{
            alert("Please Fill up all Fields");
          }
		  }


		 //activity log

		  function save_DataAct(){
			  //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
			var period = "";
		    var date = new Date();
			var day = date.getDate();
			var month = date.getMonth()+1;
			var yeartemp = date.getFullYear().toString();
			var year = yeartemp.slice(2,4);
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var time = hour + ":" + min;

			if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + "    " + time + " " + period;


			//var dateTemp = new Date().toString();
			//var pos = dateTemp.indexOf("GMT");
			//var date = dateTemp.slice(0,pos);
		    var drText = directoryTextact.value;
			var vol = volumeCountText.value;
			var actType = actTypeText.value;
			var actDesc = actDescText.value;
      if(drText  && vol  && actType && actDesc ){
  		   var dataid = drText + '(' + actType + ')' + ' - ' + actDesc;


  		   var data = {
			Date: date,
  			Directory_Code: dataid,
  			Volume: vol,

  		   }

  		   var updates = {};
  		   updates['/Users/' +  email + "/Activity_Log/" + dataid] = data;
  		   firebase.database().ref().update(updates);
         directoryTextact.value="";
         volumeCountText.value="";
        // actTypeText.value="";
        // actDescText.value="";
  		    $('#addingSuccessModal').modal("show");
			$('#addDataActModal').modal("hide");
       }
       else{
         alert("Please Fill up all Fields");
       }
		  }

		 function confirmActDel(){

		  var drText = deletedirectoryTextact.value;
				if(drText){
				 $('#ConfirmActModal').modal("show");
				}

		  }

		  $('#cancel-act-btn').click(function (){
				$('#ConfirmActModal').modal("hide");
		  });

		   function delete_DataAct(){
			    //get current user
		   var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			 //
        var drText = deletedirectoryTextact.value;
        if(drText){
          var ref = firebase.app().database().ref('/Users/' +  email + "/Activity_Log/" + drText);
          ref.remove();
          $('#filterSuccessModal').modal("show");
			$('#deleteDataModalact').modal("hide");
			$('#ConfirmActModal').modal("hide");
        }
        else{
            alert('Fill up Directory Code');
        }
      }

		//end of activity log
		//global filterStatus
		function addFilterGlobal(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var filterStatus = document.getElementById("globalfilterStatusText").value;
			firebase.database().ref('Users/' + email + '/Global_Cv_Filter/Filter').set({
				Filter: filterStatus
			  });
			$('#filterSuccessModal').modal("show");
			$('#globalfilterStatusDataModal').modal("hide");
		}

		function cgaddFilterGlobal(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var filterStatus = document.getElementById("globalcgfilterStatusText").value;
			firebase.database().ref('Users/' + email + '/Global_Cg_Filter/Filter').set({
				Filter: filterStatus
			  });
			$('#filterSuccessModal').modal("show");
			$('#globalcgfilterStatusDataModal').modal("hide");
		}
		//filter Status
		function addFilter(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			var filterStatus = document.getElementById("filterStatusText").value;
			firebase.database().ref('Users/' + email + '/Cv_Filter/Filter').set({
				Filter: filterStatus
			  });
			$('#filterSuccessModal').modal("show");
			$('#filterStatusDataModal').modal("hide");
		}

		function cgaddFilter(){
			var user = firebase.auth().currentUser;
			emailTemp = user.email;
			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');

			var filterStatus = document.getElementById("cgfilterStatusText").value;
			firebase.database().ref('Users/' + email + '/Cg_Filter/Filter').set({
				Filter: filterStatus
			  });
			$('#filterSuccessModal').modal("show");
			$('#cgfilterStatusDataModal').modal("hide");
		}

		function sendBtn(){
					 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var convoRef = firebase.database().ref().child("Conversation");
				var messageText = document.getElementById("message-content").value;
				convoRef.push().set({
					Date: date,
					User: email,
					Message: messageText,
				});
				document.getElementById("message-content").value = "";



			}

		//$('#loginPassword').keypress(function(e) {
					//if (e.which == 13) {
					  //e.preventDefault();





					//}
				 // });

		$('#message-content').keypress(function(e){
			if(e.which == 13){
				 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var convoRef = firebase.database().ref().child("Conversation");
				var messageText = document.getElementById("message-content").value;
				convoRef.push().set({
					Date: date,
					User: email,
					Message: messageText,
				});
				document.getElementById("message-content").value = "";
			}

		});

		//add links

		function saveLinksBtn(){
					 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var linksRef = firebase.database().ref().child('Users/' + email + '/MyLinks/Links');
				var titleText = document.getElementById("links-title").value;
				var linksText = document.getElementById("links-content").value;
				linksRef.push().set({
					Date: date,
					Title: titleText,
					Content: linksText,
				});
				document.getElementById("links-title").value = "";
				document.getElementById("links-content").value = "";



			}


		$('#links-content').keypress(function(e){
			if(e.which == 13){
					 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var linksRef = firebase.database().ref().child('Users/' + email + '/MyLinks/Links');
				var titleText = document.getElementById("links-title").value;
				var linksText = document.getElementById("links-content").value;
				linksRef.push().set({
					Date: date,
					Title: titleText,
					Content: linksText,
				});
				document.getElementById("links-title").value = "";
				document.getElementById("links-content").value = "";
			}

		});


		//add notes



		function saveNotesBtn(){
					 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var linksRef = firebase.database().ref().child('Users/' + email + '/MyNotes/Notes');
				var titleText = document.getElementById("notes-title").value;
				var linksText = document.getElementById("notes-content").value;
				linksRef.push().set({
					Date: date,
					Title: titleText,
					Content: linksText,
				});
				document.getElementById("notes-title").value = "";
				document.getElementById("notes-content").value = "";



			}


		$('#notes-content').keypress(function(e){
			if(e.which == 13){
					 //get current user
			   var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				 //
				var period = "";
					var date = new Date();
					var day = date.getDate();
					var month = date.getMonth()+1;
					var yeartemp = date.getFullYear().toString();
					var year = yeartemp.slice(2,4);
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var time = hour + ":" + min;

					if(month<10){
						month = "0" + month;
					}

					if(hour > 11){
						period = "PM";
					}else{
						period = "AM";
					}

					if( period == "PM" && hour > 12){
						hour = hour - 12;
					}
					if(hour<10){
						hour = "0" + hour;
					}
					if(min<10){
						min = "0" + min;
					}
					var time = hour + ":" + min;

					date = month + "/" + day + "/" + year + "   " + time + " " + period;


				var linksRef = firebase.database().ref().child('Users/' + email + '/MyNotes/Notes');
				var titleText = document.getElementById("notes-title").value;
				var linksText = document.getElementById("notes-content").value;
				linksRef.push().set({
					Date: date,
					Title: titleText,
					Content: linksText,
				});
				document.getElementById("notes-title").value = "";
				document.getElementById("notes-content").value = "";
			}

		});


      function reload(){
        location.reload();
      }

  		$(".close").click(function(){
  			$("#cvAlert").hide();
  		});

  		if(directoryText != ""){
  			$("#cvAlert").hide();
  		}

  		function clickMessenger (){

  			$("body").show();
  		}
//read Data's

function readCgGlobal(){
	$("#global_cg_body").empty();
		//$("#globaldeletedirectoryText").empty();
		//$("#globalupdatedirectoryText").empty();
			 var user = firebase.auth().currentUser;
			//name = user.displayName;
           emailTemp = user.email;
          // photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
	//display global CG
		
		var globalcgfilterRef =  firebase.database().ref().child('Users/' + email + '/Global_Cg_Filter');
		 var globalcgstatusFilter;
		 var globalcgCount = 0;
		globalcgfilterRef.on("child_added", snap => {



			var globalCgfilter= snap.child("Filter").val();

			document.getElementById("globalcg-filter-type").innerHTML = globalCgfilter;
			globalcgstatusFilter = document.getElementById("globalcg-filter-type").innerHTML;

			var globalCgRef;
			var cgOrderBy = "Status";
			if (globalcgstatusFilter == "All"){ 
				globalCgRef =  firebase.database().ref().child("Global/Cg").orderByChild("Due_Printer");
			}
			else{
				globalCgRef =  firebase.database().ref().child("Global/Cg").orderByChild(cgOrderBy).equalTo(globalcgstatusFilter);
			}




				// display cg
			

				globalCgRef.on("child_added", snap => {
					
					var drcode = snap.child("Directory_Code").val();
					var drname = snap.child("Directory_Name").val();
					var ypcode = snap.child("YPPA_Code").val();
					var duetext = snap.child("Due_Printer").val();
					var remarkstext = snap.child("Remarks").val();
					var statustext = snap.child("Status").val();
					var datetext = snap.child("Date").val();
					var emailtext = snap.child("Email").val();
					//$("#global_cg_body").append("<tr><td>" + drcode + "</td><td>" + drname + "</td><td>" + ypcode + "</td><td>" + duetext + "</td><td>" + statustext + "</td><td colspan='2'><small class='text-muted'>" + emailtext +"</small></td></tr>");
					//$("#updateRemarksdirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalupdatedirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globaldeletedirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalupdatetransdirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalupdateamddirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalupdatenucdirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalnotesupdatedirectoryTextcg").append("<option >" + drcode + "</option>" );
					$("#globalAssignCgupdatedirectoryText").append("<option >" + drcode + "</option>" );
					globalcgCount+=1;

					document.getElementById("globalCgCountText").innerHTML = globalcgCount ;

				});
				
				
				


				//
		});
	
	
}
		
		


function readCvGlobal(){
		$("#global_cv_body").empty();
		//$("#globaldeletedirectoryText").empty();
		//$("#globalupdatedirectoryText").empty();
			 var user = firebase.auth().currentUser;
			//name = user.displayName;
           emailTemp = user.email;
          // photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			//global cv
			//global cv filter
			var globalcvfilterRef =  firebase.database().ref().child('Users/' + email + '/Global_Cv_Filter');


			var globalcvstatusFilter;
			var globalcvCount=0;
		 globalcvfilterRef.on("child_added", snap => {



			 var globalCvfilter= snap.child("Filter").val();

			 document.getElementById("globalfilter-type").innerHTML = globalCvfilter;
			 globalcvstatusFilter = document.getElementById("globalfilter-type").innerHTML;
			 var globalCvRef ;
			 var cvOrderBy = "Status";

			 if (globalcvstatusFilter == "All"){
				 globalCvRef =  firebase.database().ref().child("Global/Cv").orderByChild("Due_Printer");
			 }
			 else{
				 globalCvRef =  firebase.database().ref().child("Global/Cv").orderByChild(cvOrderBy).equalTo(globalcvstatusFilter);
			 }

			
 			globalCvRef.on("child_added", snap => {
			
 			var drcode = snap.child("Directory_Code").val();
 			var drname = snap.child("Directory_Name").val();
 			var ypcode = snap.child("YPPA_Code").val();
 			var duetext = snap.child("Due_Printer").val();
 			var remarkstext = snap.child("Remarks").val();
 			var statustext = snap.child("Status").val();
 			var datetext = snap.child("Date").val();
 			var counttext = snap.child("Count").val();
 			var emailtext = snap.child("Email").val();
 			//$("#global_cv_body").append("<tr><td>" + drcode + "</td><td>" + drname + "</td><td>" + ypcode + "</td><td>" + duetext + "</td><td>" + statustext + "</td><td colspan='2'><small class='text-muted'>" + emailtext +"</small></td></tr>");
 			$("#globaldeletedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globalupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globalmtipupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globaltipupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globaltabupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globalamdocsupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globalnotesupdatedirectoryText").append("<option >" + drcode + "</option>" );
 			$("#globalAssignupdatedirectoryText").append("<option >" + drcode + "</option>" );
			//reload table
			//$('#global-cv-div').load('index.html #global-cv-div', function() {
           ///// can add another function here
			//});
 		//	$("#updateRemarksdirectoryText").append("<option >" + drcode + "</option>" );
 			globalcvCount +=1;

 			document.getElementById("globalCvCountText").innerHTML = globalcvCount ;
			
			
			
 		});
		
		
			
	
			


		 });
		 
		 
	//setTimeout(readCvGlobal, 5000);
	
}


function readUsers(){
	 UsersRef =  firebase.database().ref().child("Users");
	 
	 UsersRef.on("child_added", snap => {
			
 			var user = snap.key;
 			//var drname = snap.child("Directory_Name").val();
 			
 			
 			$("#globalAssignArtistText").append("<option >" + user + "</option>" );
 			$("#globalAssignProoferText").append("<option >" + user + "</option>" );
 			$("#globalAssignCgArtistText").append("<option >" + user + "</option>" );
 			$("#globalAssignCgProoferText").append("<option >" + user + "</option>" );
			
			
			
 		});
		
		
	
		
	 
}


function Assign_Global(){
	
	
	var period = "";
				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalAssignupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var artisttext = $('#globalAssignArtistText').val();
					var proofertext = $('#globalAssignProoferText').val();
					if(drText && artisttext && proofertext){
						
							//save to history
							 act = " Assigned to " + artisttext + " and " + proofertext + " by ";
							saveToHistory(drText, email, act, date);
							
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cv/' + drText);
							DataRef.update({
								Artist:artisttext,
								Proofer:proofertext,
								Email: refineEmail
							});
						
							DataRef.once("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								
								sendToArtistRef = ref.child('Users/' + artisttext + '/Cv/' + drText);
								sendToProoferRef = ref.child('Users/' + proofertext + '/Cv/' + drText);
								sendToCoordinatorRef = ref.child('Users/' + email + '/Cv/' + drText);
								var Sstatus = "n/a";
								//var Sremarks = "n/a";
								sendToArtistRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 sendToProoferRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 
								 sendToCoordinatorRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 
								 

							});
							
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalAssignupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
	
	
}




function AssignCg_Global(){
	
	
	var period = "";
				var period = "";
					var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour > 11){
					period = "PM";
				}else{
					period = "AM";
				}

				if( period == "PM" && hour > 12){
					hour = hour - 12;
				}
				if(hour<10){
					hour = "0" + hour;
				}
				if(min<10){
					min = "0" + min;
				}
				var time = hour + ":" + min;

				date = month + "/" + day + "/" + year + "    " + time + " " + period;

				 //get current user
				 var user = firebase.auth().currentUser;
				emailTemp = user.email;
				var emailpos = emailTemp.indexOf("@");
				var trimEmail = emailTemp.slice(0,emailpos);
				var email = trimEmail.split('.').join('');
				var refineEmail = "Updated by " + email + " " + date;
				 //
					var drText = $('#globalAssignCgupdatedirectoryText').val();
					//var remarkstext = remarksText.value;
					var artisttext = $('#globalAssignCgArtistText').val();
					var proofertext = $('#globalAssignCgProoferText').val();
					if(drText && artisttext && proofertext){
						
							//save to history
							 act = " Assigned to " + artisttext + " and " + proofertext + " by ";
							saveToHistoryCg(drText, email, act, date);
							
							var ref = firebase.app().database().ref();
							var DataRef = ref.child('/Global/Cg/' + drText);
							DataRef.update({
								Artist:artisttext,
								Proofer:proofertext,
								Email: refineEmail
							});
						
							DataRef.once("value", snap => {
			

								var drcode = snap.child("Directory_Code").val();
								var drname = snap.child("Directory_Name").val();
								var ypcode = snap.child("YPPA_Code").val();
								var duetext = snap.child("Due_Printer").val();
								var statustext = $('#globalupdatestatusText').val();
								var datetext = snap.child("Date").val();
								
								sendToArtistRef = ref.child('Users/' + artisttext + '/Cg/' + drText);
								sendToProoferRef = ref.child('Users/' + proofertext + '/Cg/' + drText);
								sendToCoordinatorRef = ref.child('Users/' + email + '/Cg/' + drText);
								var Sstatus = "n/a";
								var Sremarks = "n/a";
								sendToArtistRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 sendToProoferRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 
								  sendToCoordinatorRef.set({
									Date: date,
									Directory_Code: drcode,
									Directory_Name: drname,
									YPPA_Code: ypcode,
									Due_Printer: duetext,
									Status: Sstatus,
									//Remarks: Sremarks
								 });
								 
								 

							});
							
							
							//directoryText.value="";
							//statusText.value="";
							 $('#SuccessModal').modal("show");
					 $('#globalAssignCgupdateStatusModal').modal("hide");
						}
						else{
							alert("Please Fill up all Fields");
						}
	
	
}


function readCgGlobalShip(){
	
	var globalcgShipCount= 0;
			//display shipping Cg GLOBAL
			var globalCgShipRef =  firebase.database().ref().child("Global/Cg").orderByChild('Due_Printer').equalTo(date);

			globalCgShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				var ypcode = snap.child("YPPA_Code").val();
				var duetext = snap.child("Due_Printer").val();
				var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				var datetext = snap.child("Date").val();
				var counttext = snap.child("Count").val();
				var emailtext = snap.child("Email").val();
				//$("#global_Cgshipping_body").append("<tr><td>"  + drcode + "</td><td>" + drname +  "</td><td>" + statustext + "</td><td colspan='2'><small >" + emailtext +"</small></td></tr>");
				//globalcgShipCount +=1;
				$("#globalcg-shipping-icon").addClass("faa-flash animated");
				//document.getElementById("globalCgShipCountText").innerHTML = globalcgShipCount ;

			});
	
}

function updateCgGlobalShip(){
	$("#global_Cgshipping_body").empty();
	$("#globalcg-shipping-icon").removeClass("faa-flash animated");
	document.getElementById("globalCgShipCountText").innerHTML = " ";
	var globalcgShipCount= 0;
	shipDate();
			//display shipping Cg GLOBAL
			var globalCgShipRef =  firebase.database().ref().child("Global/Cg").orderByChild('Due_Printer').equalTo(date);

			globalCgShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				//var ypcode = snap.child("YPPA_Code").val();
				var duetext = snap.child("Due_Printer").val();
				//var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				//var datetext = snap.child("Date").val();
				//var counttext = snap.child("Count").val();
				var emailtext = snap.child("Email").val();
				var nuctext = snap.child("Nuclear").val();
				var transtext = snap.child("Transmittal").val();
				
				var cgstatustextcolor;
					
					switch(statustext){
						case "n/a":
							cgstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							cgstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							cgstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cgstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							cgstatustextcolor = "text-success";
							break;
						case "Shipped":
							cgstatustextcolor = "text-info";
							break;
						case "In Progress":
							cgstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							cgstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							cgstatustextcolor = "uk-text-danger";
							break;
					
					}
					
				var nucstatustextcolor;
					
					switch(nuctext){
						case "n/a":
							nucstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							nucstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							nucstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							nucstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							nucstatustextcolor = "text-success";
							break;
						case "Shipped":
							nucstatustextcolor = "text-info";
							break;
						case "In Progress":
							nucstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							nucstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							nucstatustextcolor = "uk-text-danger";
							break;
					
					}
				
					
				var transstatustextcolor;
					
					switch(transtext){
						case "n/a":
							transstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							transstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							transstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							transstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							transstatustextcolor = "text-success";
							break;
						case "Shipped":
							transstatustextcolor = "text-info";
							break;
						case "In Progress":
							transstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							transstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							transstatustextcolor = "uk-text-danger";
							break;
					
					}
				
				$("#global_Cgshipping_body").append("<tr><td>"  + drcode + "</td><td><small>" + drname +  "</small></td><td class='" + cgstatustextcolor + "'>" + statustext + "</td><td class='" + nucstatustextcolor +"'>" + nuctext + "</td><td class='" + transstatustextcolor +"'>" + transtext + "</td><td colspan='2'><small >" + emailtext +"</small></td></tr>");
				globalcgShipCount +=1;
				$("#globalcg-shipping-icon").addClass("faa-flash animated");
				document.getElementById("globalCgShipCountText").innerHTML = globalcgShipCount ;

			});
	setTimeout(updateCgGlobalShip, 5000);
}

function readCvGlobalShip(){
	
			
			var globalcvShipCount = 0;
			   //display shipping CV GLOBAL
			var globalCvShipRef =  firebase.database().ref().child("Global/Cv").orderByChild('Due_Printer').equalTo(date);

			globalCvShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				var ypcode = snap.child("YPPA_Code").val();
				var duetext = snap.child("Due_Printer").val();
				var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				var datetext = snap.child("Date").val();
				var counttext = snap.child("Count").val();
				var emailtext = snap.child("Email").val();
				//$("#globalshipping_body").append("<tr><td>"  + drcode + "</td><td>" + drname +  "</td><td>" + statustext + "</td><td colspan='2'><small>" + emailtext +"</small></td></tr>");
				globalcvShipCount +=1;

				//$("#global-cv-shipping-icon").addClass("faa-flash animated");


				//document.getElementById("globalCvShipCountText").innerHTML = globalcvShipCount ;

			});
	
}

function updateCvGlobalShip(){
			$("#globalshipping_body").empty();
			$("#global-cv-shipping-icon").removeClass("faa-flash animated");
			document.getElementById("globalCvShipCountText").innerHTML = " ";
			var globalcvShipCount = 0;
			shipDate();
			
			
			   //display shipping CV GLOBAL
			var globalCvShipRef =  firebase.database().ref().child("Global/Cv").orderByChild('Due_Printer').equalTo(date);

			globalCvShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				//var ypcode = snap.child("YPPA_Code").val();
				//var duetext = snap.child("Due_Printer").val();
				//var remarkstext = snap.child("Remarks").val();
				var statustext = snap.child("Status").val();
				//var mtipstatustext = snap.child("Mtip_Status").val();
				var tipstatustext = snap.child("Tip_Status").val();
				var tabstatustext = snap.child("Tab_Status").val();
				//var datetext = snap.child("Date").val();
				//var counttext = snap.child("Count").val();
				var emailtext = snap.child("Email").val();
				
				
				var cvstatustextcolor;
					
					switch(statustext){
						case "n/a":
							cvstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							cvstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							cvstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cvstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							cvstatustextcolor = "text-success";
							break;
						case "Shipped":
							cvstatustextcolor = "text-info";
							break;
						case "In Progress":
							cvstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							cvstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							cvstatustextcolor = "uk-text-danger";
							break;
					
					}
					
			
					
			var tipstatustextcolor;
					
					switch(tipstatustext){
						case "n/a":
							tipstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							tipstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							tipstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							tipstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							tipstatustextcolor = "text-success";
							break;
						case "Shipped":
							tipstatustextcolor = "text-info";
							break;
						case "In Progress":
							tipstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							tipstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							tipstatustextcolor = "uk-text-danger";
							break;
					
					}
					
				var tabstatustextcolor;
					
					switch(tabstatustext){
						case "n/a":
							tabstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							tabstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							tabstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							tabstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							tabstatustextcolor = "text-success";
							break;
						case "Shipped":
							tabstatustextcolor = "text-info";
							break;
						case "In Progress":
							tabstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							tabstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							tabstatustextcolor = "uk-text-danger";
							break;
					
					}
				
				
				$("#globalshipping_body").append("<tr><td>"  + drcode + "</td><td><small>" + drname +  "</small></td><td class='" + cvstatustextcolor +"'>" + statustext + "</td><td class='" + tipstatustextcolor +"'>" + tipstatustext +  "</td><td class='" + tabstatustextcolor +"'>" +tabstatustext +"</td><td colspan='2'><small>" + emailtext +"</small></td></tr>");
				globalcvShipCount +=1;

				$("#global-cv-shipping-icon").addClass("faa-flash animated");


				document.getElementById("globalCvShipCountText").innerHTML = globalcvShipCount ;

			});
	setTimeout(updateCvGlobalShip, 5000);
}

function updateMtipGlobalShip(){
	$("#globalmtipshipping_body").empty();
			$("#global-mtip-shipping-icon").removeClass("faa-flash animated");
			document.getElementById("globalMtipShipCountText").innerHTML = " ";
			var globalmtipShipCount = 0;
			shipDate();
			   //display shipping CV GLOBAL
			var globalCvShipRef =  firebase.database().ref().child("Global/Cv").orderByChild('Mtip_Due_Printer').equalTo(date);

			globalCvShipRef.on("child_added", snap => {


				var drcode = snap.child("Directory_Code").val();
				var drname = snap.child("Directory_Name").val();
				//var ypcode = snap.child("YPPA_Code").val();
				//var mtipduetext = snap.child("Mtip_Due_Printer").val();
				//var remarkstext = snap.child("Remarks").val();
				//var statustext = snap.child("Status").val();
				var mtipstatustext = snap.child("Mtip_Status").val();
				//var datetext = snap.child("Date").val();
				//var counttext = snap.child("Count").val();
				var emailtext = snap.child("Email").val();
				
					var mtipstatustextcolor;
					
					switch(mtipstatustext){
						case "n/a":
							mtipstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							mtipstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							mtipstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							mtipstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							mtipstatustextcolor = "text-success";
							break;
						case "Shipped":
							mtipstatustextcolor = "text-info";
							break;
						case "In Progress":
							mtipstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							mtipstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							mtipstatustextcolor = "uk-text-danger";
							break;
					
					}
				
				$("#globalmtipshipping_body").append("<tr><td>"  + drcode + "</td><td><small>" + drname +  "</small></td><td class='" + mtipstatustextcolor + "'>" + mtipstatustext + "</td><td colspan='2'><small>" + emailtext +"</small></td></tr>");
				globalmtipShipCount +=1;

				$("#global-mtip-shipping-icon").addClass("faa-flash animated");


				document.getElementById("globalMtipShipCountText").innerHTML = globalmtipShipCount ;

			});
	setTimeout(updateMtipGlobalShip, 5000);
}

function updateCGGlobalDiv(){
	
	$("#global_cg_body").empty();
		//$("#globaldeletedirectoryText").empty();
		//$("#globalupdatedirectoryText").empty();
			 var user = firebase.auth().currentUser;
			//name = user.displayName;
           emailTemp = user.email;
          // photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
	//display global CG
		
		var globalcgfilterRef =  firebase.database().ref().child('Users/' + email + '/Global_Cg_Filter');
		 var globalcgstatusFilter;
		 var globalcgCount = 0;
		globalcgfilterRef.on("child_added", snap => {



			var globalCgfilter= snap.child("Filter").val();

			document.getElementById("globalcg-filter-type").innerHTML = globalCgfilter;
			globalcgstatusFilter = document.getElementById("globalcg-filter-type").innerHTML;

			var globalCgRef;
			var cgOrderBy = "Status";
			if (globalcgstatusFilter == "All"){ 
				globalCgRef =  firebase.database().ref().child("Global/Cg").orderByChild("Due_Printer");
			}
			else{
				globalCgRef =  firebase.database().ref().child("Global/Cg").orderByChild(cgOrderBy).equalTo(globalcgstatusFilter);
			}




				// display cg
			

				globalCgRef.on("child_added", snap => {
					
					var drcode = snap.child("Directory_Code").val();
					var drname = snap.child("Directory_Name").val();
					var ypcode = snap.child("YPPA_Code").val();
					var duetext = snap.child("Due_Printer").val();
					var remarkstext = snap.child("Remarks").val();
					var statustext = snap.child("Status").val();
					var datetext = snap.child("Date").val();
					var emailtext = snap.child("Email").val();
					var amdtext = snap.child("Amdocs").val();
					var transtext = snap.child("Transmittal").val();
					var nuctext = snap.child("Nuclear").val();
					var notestext = snap.child("Notes").val();
					var artisttext = snap.child("Artist").val();
					var proofertext = snap.child("Proofer").val();
					
					if(artisttext == null && proofertext == null){
						artisttext = "";
						proofertext = "";
					}
					
					var statustextcolor;
					
					switch(statustext){
						case "n/a":
							statustextcolor = "uk-text-meta";
							break;
						case "Done":
							statustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							statustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							statustextcolor = "uk-text-success";
							break;
						case "Approved":
							statustextcolor = "text-success";
							break;
						case "Shipped":
							statustextcolor = "text-info";
							break;
						case "In Progress":
							statustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							statustextcolor = "uk-text-warning";
							break;
						case "Rework":
							statustextcolor = "uk-text-danger";
							break;
					
					}
					
				
					
					var nuclearPagetextcolor;
					
					switch(nuctext){
						case "n/a":
							nuclearPagetextcolor = "uk-text-meta";
							break;
						case "Done":
							nuclearPagetextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							nuclearPagetextcolor = "uk-text-primary";
							break;
						case "Emailed":
							nuclearPagetextcolor = "uk-text-success";
							break;
						case "Approved":
							nuclearPagetextcolor = "text-success";
							break;
						case "Shipped":
							nuclearPagetextcolor = "text-info";
							break;
						case "In Progress":
							nuclearPagetextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							nuclearPagetextcolor = "uk-text-warning";
							break;
						case "Rework":
							nuclearPagetextcolor = "uk-text-danger";
							break;
							
					}
					
					var transtextcolor;
					
					switch(transtext){
						
						case "n/a":
							transtextcolor = "uk-text-meta";
							break;
						case "Done":
							transtextcolor = "uk-text-primary";
							break;
						
					}
					
						var amdtextcolor;
					
					switch(amdtext){
						
						case "n/a":
							amdtextcolor = "uk-text-meta";
							break;
						case "Done":
							amdtextcolor = "uk-text-primary";
							break;
						
					}
						
					
					$("#global_cg_body").append("<tr><td >" + drcode + "</td><td ><small>" + drname + "</small></td><td class='uk-text-meta'>" + ypcode + "</td><td>" + duetext + "</td><td class='" + statustextcolor + "'>" + statustext + "</td><td class='" + nuclearPagetextcolor + "'>" + nuctext  + "</td><td class='" + transtextcolor + "'>" +  transtext + "</td><td class='" + amdtextcolor +"'>" + amdtext +  "</td><td colspan='2' class='text-primary font-italic'>" + notestext + "</td><td><small>" + artisttext + "<br>" + proofertext + "</small></td><td class='uk-text-meta'><small >" + emailtext +"</small></td></tr>");
					//$("#updateRemarksdirectoryTextcg").append("<option >" + drcode + "</option>" );
					//$("#globalupdatedirectoryTextcg").append("<option >" + drcode + "</option>" );
					//$("#globaldeletedirectoryTextcg").append("<option >" + drcode + "</option>" );
					globalcgCount+=1;

					document.getElementById("globalCgCountText").innerHTML = globalcgCount ;

				});
				
				
				


				//
		});
	setTimeout(updateCGGlobalDiv, 5000);
	
}

function updateCVGlobalDiv()
{ 
   
		$("#global_cv_body").empty();
		//$("#globaldeletedirectoryText").empty();
		//$("#globalupdatedirectoryText").empty();
			 var user = firebase.auth().currentUser;
			//name = user.displayName;
           emailTemp = user.email;
          // photo = user.password;

			var emailpos = emailTemp.indexOf("@");
			var trimEmail = emailTemp.slice(0,emailpos);
			var email = trimEmail.split('.').join('');
			//global cv
			//global cv filter
			var globalcvfilterRef =  firebase.database().ref().child('Users/' + email + '/Global_Cv_Filter');


			var globalcvstatusFilter;
			var globalcvCount=0;
		 globalcvfilterRef.on("child_added", snap => {



			 var globalCvfilter= snap.child("Filter").val();

			 document.getElementById("globalfilter-type").innerHTML = globalCvfilter;
			 globalcvstatusFilter = document.getElementById("globalfilter-type").innerHTML;
			 var globalCvRef ;
			 var cvOrderBy = "Status";

			 if (globalcvstatusFilter == "All"){
				 globalCvRef =  firebase.database().ref().child("Global/Cv").orderByChild("Due_Printer");
			 }
			 else{
				 globalCvRef =  firebase.database().ref().child("Global/Cv").orderByChild(cvOrderBy).equalTo(globalcvstatusFilter);
			 }

			
 			globalCvRef.on("child_added", snap => {
			
 			var drcode = snap.child("Directory_Code").val();
 			var drname = snap.child("Directory_Name").val();
 			var ypcode = snap.child("YPPA_Code").val();
 			var duetext = snap.child("Due_Printer").val();
 			var mtipduetext = snap.child("Mtip_Due_Printer").val();
 			//var remarkstext = snap.child("Remarks").val();
 			var statustext = snap.child("Status").val();
 			var mtipstatustext = snap.child("Mtip_Status").val();
 			var tipstatustext = snap.child("Tip_Status").val();
 			var tabstatustext = snap.child("Tab_Status").val();
 			var datetext = snap.child("Date").val();
 			var counttext = snap.child("Count").val();
 			var emailtext = snap.child("Email").val();
 			var amdtext = snap.child("Amdocs").val();
 			var notestext = snap.child("Notes").val();
 			var artisttext = snap.child("Artist").val();
 			var proofertext = snap.child("Proofer").val();
			
			if(artisttext == null && proofertext == null){
				artisttext = "";
				proofertext = "";
			}
			
			var mtiptextcolor;
			
			if(mtipduetext == "n/a"){
				mtiptextcolor = "uk-text-meta";
			}
			
			var cvstatustextcolor;
					
					switch(statustext){
						case "n/a":
							cvstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							cvstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							cvstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							cvstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							cvstatustextcolor = "text-success";
							break;
						case "Shipped":
							cvstatustextcolor = "text-info";
							break;
						case "In Progress":
							cvstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							cvstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							cvstatustextcolor = "uk-text-danger";
							break;
					
					}
					
			var mtipstatustextcolor;
					
					switch(mtipstatustext){
						case "n/a":
							mtipstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							mtipstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							mtipstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							mtipstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							mtipstatustextcolor = "text-success";
							break;
						case "Shipped":
							mtipstatustextcolor = "text-info";
							break;
						case "In Progress":
							mtipstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							mtipstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							mtipstatustextcolor = "uk-text-danger";
							break;
					
					}
					
			var tipstatustextcolor;
					
					switch(tipstatustext){
						case "n/a":
							tipstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							tipstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							tipstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							tipstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							tipstatustextcolor = "text-success";
							break;
						case "Shipped":
							tipstatustextcolor = "text-info";
							break;
						case "In Progress":
							tipstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							tipstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							tipstatustextcolor = "uk-text-danger";
							break;
					
					}
					
				var tabstatustextcolor;
					
					switch(tabstatustext){
						case "n/a":
							tabstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							tabstatustextcolor = "uk-text-primary";
							break;
						case "Done Proofing":
							tabstatustextcolor = "uk-text-primary";
							break;
						case "Emailed":
							tabstatustextcolor = "uk-text-success";
							break;
						case "Approved":
							tabstatustextcolor = "text-success";
							break;
						case "Shipped":
							tabstatustextcolor = "text-info";
							break;
						case "In Progress":
							tabstatustextcolor = "uk-text-warning";
							break;
						case "In Proofing":
							tabstatustextcolor = "uk-text-warning";
							break;
						case "Rework":
							tabstatustextcolor = "uk-text-danger";
							break;
					
					}
					
				var amdstatustextcolor;
					
					switch(amdtext){
						case "n/a":
							amdstatustextcolor = "uk-text-meta";
							break;
						case "Done":
							amdstatustextcolor = "uk-text-primary";
							break;
					}
					
			
 			$("#global_cv_body").append("<tr><td>" + drcode + "</td><td><small>" + drname + "</small></td><td class='uk-text-meta'>" + ypcode + "</td><td class='" + mtiptextcolor +"'>" + mtipduetext + "</td><td>" + duetext + "</td><td class='" + cvstatustextcolor + "'>" + statustext + "</td><td class='" + mtipstatustextcolor + "'>" + mtipstatustext + "</td><td class='" + tipstatustextcolor + "'>" + tipstatustext +  "</td><td class='" + tabstatustextcolor + "'>" + tabstatustext + "</td><td class='" + amdstatustextcolor + "'>" + amdtext + "</td><td colspan='2' class='text-primary font-italic'>" + notestext + "</td><td><small>" + artisttext + "<br>"+ proofertext + "</small></td><td class='uk-text-meta'><small >" + emailtext +"</small></td></tr>");
 			//$("#globaldeletedirectoryText").append("<option >" + drcode + "</option>" );
 			//$("#globalupdatedirectoryText").append("<option >" + drcode + "</option>" );
			//reload table
			//$('#global-cv-div').load('index.html #global-cv-div', function() {
           ///// can add another function here
			//});
 		//	$("#updateRemarksdirectoryText").append("<option >" + drcode + "</option>" );
 			globalcvCount +=1;

 			document.getElementById("globalCvCountText").innerHTML = globalcvCount ;
			
			
			
 		});
		
		
			
	
			


		 });
		 
		 
	setTimeout(updateCVGlobalDiv, 5000);
	

	
}
	function shipDate(){
		
		//date indicators
		document.getElementById("date-indicator").innerHTML = " " + " " + date;
		document.getElementById("globaldate-indicator").innerHTML = " " + " " + date;
		document.getElementById("mtipglobaldate-indicator").innerHTML = " " + " " + date;
		document.getElementById("globalCgdate-indicator").innerHTML = " " + " " + date;


	
		document.getElementById("Cgdate-indicator").innerHTML = " " + " " + date;

		document.getElementById("Dcidate-indicator").innerHTML = " " + " " + date;
		
		date = new Date();
				var day = date.getDate();
				//var day = 1;
				var month = date.getMonth()+1;
				//var month = 3;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				if(hour == 0 && min == 0 && sec == 0){
					reload();
				}
				if(day == 1 && month == 3){
					day = 28;
					month-=1;
				}

				//else if(day == 30){
					//day-=1;
					//month-=1;
				//}
				else if(day == 1){
					month-=1;
					if(month == 0){
						month = 12;
					}
					if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
						day = 31;
					}
					if(month == 4 || month == 6 || month == 9 || month == 11 ){
						day = 30;
					}
				}
				else{
					day-=1;
				}


				//var year = stryear.slice(1,3);

				if(day<10){
					day = "0" + day;
				}
				if(month<10){
					month = "0" + month;
				}
				date = month + "/" + day + "/" + year;
				return date;
	}
	
	
	function exportDate(){
		
		date = new Date();
				var day = date.getDate();
				//var day = 1;
				var month = date.getMonth()+1;
				//var month = 3;
				var yeartemp = date.getFullYear().toString();
				var year = yeartemp.slice(2,4);
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour + ":" + min;

				
				
				//var year = stryear.slice(1,3);

				if(day<10){
					day = "0" + day;
				}
				if(month<10){
					month = "0" + month;
				}
				
				if(hour > 11){
				period = "PM";
			}else{
				period = "AM";
			}

			if( period == "PM" && hour > 12){
				hour = hour - 12;
			}
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			var time = hour + ":" + min;

			date = month + "/" + day + "/" + year + " - " + time + " " + period;
				
				return date;
	}
	
	
	
//$(document).ready(function(){
	//$('[href^="#"]').on('click',function (e) {
	//	e.preventDefault();

	//	var target = this.hash;
	//	var $target = $(target);

	//	$('html, body').stop().animate({
			//'scrollTop': $target.offset().top
	//		}, 1000, 'swing', function () {
			//	window.location.hash = target;
	//		});
	//});
//});



readUsers();
