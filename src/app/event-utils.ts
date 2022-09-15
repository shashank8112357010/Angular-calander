import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
//const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [

  // Holidays
  

  {
    
    title: 'Holiday',
    start: '2022-07-10',
    color: '#F6F0FF',
    textColor:'#673AB7',
    center:'title'
  },
  {
   
    start: '2022-07-10',
    title: 'Independence Day',
    color: '#F6F0FF',
    textColor:'#673AB7',
  },


// Entry Description

  {
    
    start: '2022-06-27',
    title: 'First Entry - 10:42 AM',
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
  },
  {
    start: '2022-06-27',
    title: 'Last Entry - 09:28 PM' ,
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
  
  },
  {
    start: '2022-06-27',
    title: 'Worked For - 07:52:18',
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
 
  },

  {
   
    start: '2022-06-27',
    color: '#FF8F00',
    height: 60
  },


//second

  {
  
    start: '2022-06-28',
    title: 'First Entry - 10:04 AM',
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
  },
  {
  
    start: '2022-06-28',
    title: 'Last Entry - 09:04 PM' ,
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
  
  },
  {
   
    start: '2022-06-28',
    title: 'Worked For - 08:06:47',
    color: '#FFFFFF',
    textColor:'rgba(0, 0, 0, 0.87)',
 
  },

  {
   
    start: '2022-06-28',
    color: '#0D47A1',
  },


  
//three

{
  
  start: '2022-06-29',
  title: 'First Entry - 10:35 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-06-29',
  title: 'Last Entry - 08:17 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-06-29',
  title: 'Worked For - 08:26:13',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-06-29',
  color: '#0D47A1',
  
},

// four


{
  
  start: '2022-06-30',
  title: 'First Entry - 10:08 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-06-30',
  title: 'Last Entry - 08:07 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-06-30',
  title: 'Worked For - 05:29:19',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-06-30',
  color: '#FF8F00',
  
},


// five

{
  
  start: '2022-07-01',
  title: 'First Entry - 10:23 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-01',
  title: 'Last Entry - 08:33 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-01',
  title: 'Worked For - 07:32:56',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-01',
  color: '#FF8F00',
  
},


// six

{
  
  start: '2022-07-06',
  title: 'First Entry - 10:05 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-06',
  title: 'Last Entry - 08:21 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-06',
  title: 'Worked For - 06:38:21',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-06',
  color: '#FF8F00',
  
},



// six

{
  
  start: '2022-07-07',
  title: 'First Entry - 10:27 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-07',
  title: 'Last Entry - 07:59 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-07',
  title: 'Worked For - 08:46:16',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-07',
  color: '#0D47A1',
  
},


// seven

{
  
  start: '2022-07-08',
  title: 'First Entry - 10:05 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-08',
  title: 'Last Entry - 09:31 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-08',
  title: 'Worked For - 07:46:31',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-08',
  color: '#0D47A1',
  
},


// eight

{
  
  start: '2022-07-011',
  title: 'First Entry - 11:05 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-11',
  title: 'Last Entry - 06:56 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-11',
  title: 'Worked For - 07:18:41',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-11',
  color: '#0D47A1',
  
},


// nine

{
  
  start: '2022-07-12',
  title: 'First Entry - 10:14 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-12',
  title: 'Last Entry - 08:01 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-12',
  title: 'Worked For - 07:38:01',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-12',
  color: '#FF8F00',
  
},


// tenth

{
  
  start: '2022-07-13',
  title: 'First Entry - 10:09 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-13',
  title: 'Last Entry - 09:37 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-13',
  title: 'Worked For - 07:38:01',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-13',
  color: '#FF8F00',
  
},


// 11th

{
  
  start: '2022-07-14',
  title: 'First Entry - 10:26 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-14',
  title: 'Last Entry - 08:42 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-14',
  title: 'Worked For - 08:04:51',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-14',
  color: '#0D47A1',
  
},


// seven

{
  
  start: '2022-07-15',
  title: 'First Entry - 11:00 AM',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',
},
{

  start: '2022-07-15',
  title: 'Last Entry - 07:57 PM' ,
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},
{
 
  start: '2022-07-15',
  title: 'Worked For - 07:19:57',
  color: '#FFFFFF',
  textColor:'rgba(0, 0, 0, 0.87)',

},

{
 
  start: '2022-07-15',
  color: '#FF8F00',
  
},


  
  // Week Off

  {
   
    daysOfWeek: [0,6], //Sundays and saturdays
    title: 'Week Off',
    rendering:"background",
    color: "#FCE4EC",
    textColor:'#D81B60',
    overLap: false,
    allDay: true
  },

  
// Leave 

  {
  
    start: '2022-07-04',
    title: 'Leave',
    rendering:"background",
    color: "#FFEBEE",
    textColor:'#D81B60',
    
  },
  {

    start: '2022-07-05',
    title: 'Leave',
    rendering:"background",
    color: "#FFEBEE",
    textColor:'#D81B60',
    
  }
  


];

export function createEventId() {
  return String(eventGuid++);
}
