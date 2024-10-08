/*
 * Copyright © 2023. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

//@ts-check - Get type warnings from the TypeScript language server. Remove if not wanted.

/**
 * Get access to the Spotfire Mod API by providing a callback to the initialize method.
 * @param {Spotfire.Mod} mod - mod api
 */
Spotfire.initialize(async (mod) => {
    /**
     * Create the read function.
     */
    const reader = mod.createReader(mod.visualization.data(), mod.windowSize(), mod.property("myProperty"));

    /**
     * Store the context.
     */
    const context = mod.getRenderContext();

    /**
     * Initiate the read loop
     */
    reader.subscribe(render);

    /**
     * @param {Spotfire.DataView} dataView
     * @param {Spotfire.Size} windowSize
     * @param {Spotfire.ModProperty<string>} prop
     */
    async function render(dataView, windowSize, prop) {
				
        /**
         * Check the data view for errors
         */
        let errors = await dataView.getErrors();
        if (errors.length > 0) {
            // Showing an error overlay will hide the mod iframe.
            // Clear the mod content here to avoid flickering effect of
            // an old configuration when next valid data view is received.
            mod.controls.errorOverlay.show(errors);
            return;
        }
        mod.controls.errorOverlay.hide();

        /**
         * Get the hierarchy of the categorical X-axis.
         */
		 
		 /*
        const xHierarchy = await dataView.hierarchy("X");
        const xRoot = await xHierarchy.root();

        if (xRoot == null) {
            // User interaction caused the data view to expire.
            // Don't clear the mod content here to avoid flickering.
            return;
        }
		
		*/

        /**
         * Print out to document
         */
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////
		
		var calendarEl = document.getElementById('calendar');
		
		let eventData = []
		// gets all dataView rows and parses to populate spotfire data
		const rows = await dataView.allRows();

		rows.map( r => {
			
			/*
			
			console.log('££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££')
			
			console.log('---------------------- Event Name--------------------------------')
			console.log(r.categorical("event_name").value()[0].value())
			console.log('---------------------- Start Date--------------------------------')
			console.log(r.categorical("event_startdate").value()[0].value())
			console.log('---------------------- End Date--------------------------------')
			console.log(r.categorical("event_enddate").value()[0].value())
			console.log('---------------------- Category--------------------------------')
			console.log(r.categorical("event_category").value()[0].value())
			
			*/
			

					
					let aevent_name = r.categorical("event_name").value()[0].value()					
					let aevent_startdate = r.categorical("event_startdate").value()[0].value()
					let aevent_enddate = r.categorical("event_enddate").value()[0].value()
					let aevent_category = r.categorical("event_category").value()[0].value()
					
				

					//create a json structure
					
					let datapoint = {}
					
					datapoint["event_name"] = aevent_name;
					datapoint["event_startdate"] = aevent_startdate
					datapoint["event_enddate"] = aevent_enddate
					datapoint["event_category"] = aevent_category
					

					//add json to array
					eventData.push(datapoint)

				})
				
		function getEventsFromCSV() {			  
			 
			  
			return new Promise((resolve, reject) => {
				
				
			  const events_dummyData = [
						{
							"event_name":"Arabic Music Concert","event_startDate":"2024-01-01","event_endDate":"2024-01-02","event_category":"concerts"
						},
						{
							"event_name":"Traditional Dance Performance","event_startDate":"2024-01-05","event_endDate":"2024-01-06","event_category":"arabic events"
						},
						{
							"event_name":"Modern Art Exhibition","event_startDate":"2024-01-10","event_endDate":"2024-01-12","event_category":"shows"
						},
						{
							"event_name":"Fashion Show","event_startDate":"2024-01-15","event_endDate":"2024-01-16","event_category":"nightlife"
						},
						{
							"event_name":"Comedy Night","event_startDate":"2024-01-18","event_endDate":"2024-01-19","event_category":"shows"
						},
						{
							"event_name":"Poetry Reading","event_startDate":"2024-01-20","event_endDate":"2024-01-21","event_category":"arabic events"
						},
						{
							"event_name":"Film Screening","event_startDate":"2024-01-22","event_endDate":"2024-01-23","event_category":"concerts"
						},
						{
							"event_name":"Live Music Performance","event_startDate":"2024-01-25","event_endDate":"2024-01-26","event_category":"nightlife"
						},
						{
							"event_name":"Cultural Festival","event_startDate":"2024-01-28","event_endDate":"2024-01-30","event_category":"arabic events"
						},
						{
							"event_name":"Arabic Music Concert","event_startDate":"2024-02-01","event_endDate":"2024-02-02","event_category":"concerts"
						},
						{
							"event_name":"Traditional Dance Performance","event_startDate":"2024-02-05","event_endDate":"2024-02-06","event_category":"arabic events"
						},
						{
							"event_name":"Modern Art Exhibition","event_startDate":"2024-02-10","event_endDate":"2024-02-12","event_category":"shows"
						},
						{
							"event_name":"Fashion Show","event_startDate":"2024-02-15","event_endDate":"2024-02-16","event_category":"nightlife"
						},
						{
							"event_name":"Comedy Night","event_startDate":"2024-02-18","event_endDate":"2024-02-19","event_category":"shows"
						},
						{
							"event_name":"Poetry Reading","event_startDate":"2024-02-20","event_endDate":"2024-02-21","event_category":"arabic events"
						},
						{
							"event_name":"Film Screening","event_startDate":"2024-02-22","event_endDate":"2024-02-23","event_category":"concerts"
						},
						{
							"event_name":"Live Music Performance","event_startDate":"2024-02-25","event_endDate":"2024-02-26","event_category":"nightlife"
						},
						{
							"event_name":"Cultural Festival","event_startDate":"2024-02-28","event_endDate":"2024-02-30","event_category":"arabic events"
						},
						{
							"event_name":"Arabic Music Concert","event_startDate":"2024-10-01","event_endDate":"2024-10-02","event_category":"concerts"
						},
						{
							"event_name":"Traditional Dance Performance","event_startDate":"2024-10-05","event_endDate":"2024-10-06","event_category":"arabic events"
						},
						{
							"event_name":"Modern Art Exhibition","event_startDate":"2024-10-10","event_endDate":"2024-10-12","event_category":"shows"
						},
						{
							"event_name":"Fashion Show","event_startDate":"2024-10-15","event_endDate":"2024-10-16","event_category":"nightlife"
						},
						{
							"event_name":"Comedy Night","event_startDate":"2024-10-18","event_endDate":"2024-10-19","event_category":"shows"
						},
						{
							"event_name":"Poetry Reading","event_startDate":"2024-10-20","event_endDate":"2024-10-21","event_category":"arabic events"
						},
						{
							"event_name":"Film Screening","event_startDate":"2024-10-22","event_endDate":"2024-10-23","event_category":"concerts"
						},
						{
							"event_name":"Live Music Performance","event_startDate":"2024-10-25","event_endDate":"2024-10-26","event_category":"nightlife"
						},
						{
							"event_name":"Cultural Festival","event_startDate":"2024-10-28","event_endDate":"2024-10-30","event_category":"arabic events"
						},
						{
							"event_name":"Fashion Show","event_startDate":"2024-10-02","event_endDate":"2024-10-10","event_category":"nightlife"
						}
					];
					
					let flag = 2;

					if (flag === 1) {
					  // Code to be executed if flag is equal to 1
					  //console.log("Flag is 1");
					  //console.log(events_dummyData)
					  //console.log(typeof events_dummyData)
					  resolve(events_dummyData)
					} else {
						//console.log(eventData)
						//console.log(typeof eventData)
						resolve(eventData)
					}

			});
		  }
		  

		  ////////////////////////////////////////////////////////////////////////////////////////////////////


		  getEventsFromCSV()
			.then(events => {
			  var calendar = new FullCalendar.Calendar(calendarEl, {
				initialView: 'dayGridMonth',
				multiMonthMaxColumns: 3,
				headerToolbar: {
				  left: 'prev,next',
				  center: 'title',
				  right: 'multiMonthYear,dayGridMonth,dayGridWeek,dayGridDay'
				},
				views: {
				  multiMonthYear: {
					buttonText: 'Year'
				  },
				  dayGridMonth: {
					buttonText: 'Month'
				  },
				  dayGridWeek: {
					buttonText: 'Week'
				  },
				  dayGridDay: {
					buttonText: 'Day'
				  }
				},

				events: events.map(event => ({
					title: event.event_name,
					start: event.event_startdate,
					end: event.event_enddate,
					color: getColorByCategory(event)
				  })),
			  });

			  function getColorByCategory(event) {
				  
				  category = event.event_category
				  
				  /*
				  
				  console.log('---------------------CSV-------------------------------')
				  
				  console.log(event)
				  
				  console.log('Event Name: ' + event.event_name)
				  console.log('Event Start: ' + event.event_startdate)
				  console.log('Event End: ' + event.event_enddate)
				  console.log('Event category: ' + event.event_category)
				  
				  */
			
				switch (category.toLowerCase()) {
				  case 'concerts':
					return 'blue';
				  case 'arabic events':
					return 'orange';
				  case 'shows':
					return 'green';
				  case 'nightlife':
					return 'purple'; 
				  default:
					return 'gray'; 
				}
			  }

			  calendar.render();
			})
			.catch(error => {
			  console.error("Error fetching events:", error);
			});


        /**
         * Signal that the mod is ready for export.
         */
        context.signalRenderComplete();
    }
});
