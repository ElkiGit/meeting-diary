import { observer } from 'mobx-react-lite';
import { Grid, Card, Typography ,CardContent, Avatar} from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import storeAppointment from '../store/appointment';
import storeService from '../store/service';
const  Meeting=observer(()=>{
  const data=storeAppointment.dataAppointments;
  let dataSort=data.slice().sort((a,b)=>Date.parse(a.dateTime)-Date.parse(b.dateTime));
  
  return(
    <>
   
    <Grid container spacing={2}>
      {dataSort.map((meet) => (
        <Grid item xs={12} sm={6} md={4} key={meet.id}>
          <MeetItem meetItem={meet} />
        </Grid>
      ))}
    </Grid>
    </>
  )
})
export default Meeting;
function MeetItem({meetItem}){
  const currentDate = new Date();
  const meetDate = new Date(meetItem.dateTime);
  let color = '#3cef25';
  let color2='#3cef25';

  if (currentDate.toDateString() === meetDate.toDateString()) {
    color = '#ff4900';
    color2='#ff4900';
  } else if (
    meetDate >= currentDate &&
    meetDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
  ) {
    color = '#ffe600';
    color2='#ffe600';
  }
  else if(new Date(currentDate.getTime())>meetDate){
    color='#bdbdbd'
    color2='#009f92'
  
  }

  
  
  
  return (<>

    <Card sx={{ backgroundColor: 'white', color: color2, padding: '1rem' }}>
    <CardContent >
      <Typography variant="h5" component="div">
      Meeting Details
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Service Type: </span>
        {storeService.dataServices.filter((item)=>item.id==meetItem.serviceType)[0].name};
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Date and Time:</span> {new Date(meetItem.dateTime).toLocaleString()}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Client Name: </span>{meetItem.clientName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Client Phone: </span>{meetItem.clientPhone}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Client Phone:  </span>{meetItem.clientPhone}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}> Client Email:</span>{meetItem.clientEmail}
      </Typography>
 <Avatar sx={{backgroundColor:color,marginLeft:'40%',marginTop:'5%'}}>
  <AccessAlarmIcon></AccessAlarmIcon>
 </Avatar>
    </CardContent>
  </Card>
    
    </>
  );

}

// const dataSort=[{
//   id: '758',
//   serviceType: '11',
//   dateTime:'2023-12-31' ,
//   clientName: 'Avi Cohen',
//   clientPhone: '050-1234567',
//   clientEmail: 'm@m.com',
// },
// {
//   id: '759',
//   serviceType: '12',
//   dateTime: '2024-01-01',
//   clientName: 'Sarah Johnson',
//   clientPhone: '051-9876543',
//   clientEmail: 's@s.com',
// },
// {
//   id: '760',
//   serviceType: '11',
//   dateTime: '2021-06-30T11:15:00.000Z',
//   clientName: 'John Smith',
//   clientPhone: '052-5555555',
//   clientEmail: 'j@j.com',
// },
// {
//   id: '761',
//   serviceType: '13',
//   dateTime: '2021-07-05T09:45:00.000Z',
//   clientName: 'Emily Davis',
//   clientPhone: '053-1111111',
//   clientEmail: 'e@e.com',
// },
// {
//   id: '762',
//   serviceType: '12',
//   dateTime: '2021-07-10T16:00:00.000Z',
//   clientName: 'Michael Brown',
//   clientPhone: '054-9999999',
//   clientEmail: 'm@m.com',
// }];