/*

This file is part of CaptureTheData!

Copyright (c) 2011, Bobbie Smulders

Contact:  mail@bsmulders.com

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

*/

Ext.require('Ext.chart.*');

Ext.application({
	name: 'CTD',
	appFolder: 'ctd',
	autoCreateViewport: true,
	controllers: ['Trip','TimeControl','Widget'],
	models: ['GpsReport','GsmReport','Trip'],
	stores: ['GpsReports','GsmReports','TimeControl','Trips','TripSummaries'],
	views: ['GpsSpeedWindow','GsmSignalWindow','Viewport','GpsInfoWindow','GmapsWindow','TimeControl','TripList','WidgetPicker'],
	launch: function() {
	}
});