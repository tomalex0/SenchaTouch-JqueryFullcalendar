
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
		scroll : 'vertical'
	    }]
	});
       
    }
});

