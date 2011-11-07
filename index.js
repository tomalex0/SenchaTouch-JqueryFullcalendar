
Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
	
	/*new Ext.FullCalendar({
	    fullscreen : true,
	    scroll  : 'vertical'
	});*/
	
	new Ext.Panel({
	    fullscreen : true,
	    layout : {
		type : 'fit'
	    },
	    dockedItems : [{
		xtype : 'toolbar',
		title : 'Calendar'
	    }],
	    items : [{
		xtype : 'fullcalendarpanel',
		listeners : {
		    dayclick : function(date, allDay, jsEvent, view, fc){
			if (allDay) {
			    alert('Clicked on the entire day: ' + date);
			}else{
			    alert('Clicked on the slot: ' + date);
			}
			alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			alert('Current view: ' + view.name);
			// change the day's background color just for fun
			//$(fc).css('background-color', 'red');
		    },
		    eventclick : function(calEvent, jsEvent, view, fc){
			alert('Event: ' + calEvent.title);
			alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			alert('View: ' + view.name);
			// change the border color just for fun
			//$(fc).css('border-color', 'red');
		    }
		}
	    }]
	});
       
    }
});

