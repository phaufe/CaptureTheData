/*

This file is part of CaptureTheData!

Copyright (c) 2011, Bobbie Smulders

Contact:  mail@bsmulders.com

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

 */

Ext.define('CTD.view.ObdVehicleSpeedWindow', {
	extend : 'CTD.view.WidgetWindow',
	alias : 'widget.obdvehiclespeedwindow',
	requires : 'CTD.store.Measurements',
	title : 'OBD Vehicle Speed',
	items : [ {
		xtype : 'chart',
		style : 'background : #4A4A4A',
		animate : {
			duration : 300,
			easing : 'ease',
		},
		store : 'Measurements',
		insetPadding : 5,
		flex : 1,
		axes : [ {
			type : 'gauge',
			position : 'gauge',
			minimum : 0,
			maximum : 160,
			steps : 8,
			margin : -7,
			title : 'km/h',
		} ],
		series : [ {
			type : 'gauge',
			field : 'OBD.VehicleSpeed',
			donut : 72,
			colorSet : [ '#FB3', '#7A7A7A' ],
		} ]
	} ]
});