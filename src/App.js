

import Header from './components/Header';
import FullRegistration from './components/FullRegistration';
import PhoneReg from './components/PhoneReg';
import GuestEntry from './components/GuestEntry';
import Container from 'react-bootstrap/Container';
import Review from './components/Review';
import { useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { css } from "@emotion/core";


const loader = css`
display: block;
margin: 0 auto;

`;

const App = () => {

  //GOOGLE SPREADSHEET INITIAL
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n');

    console.log(CLIENT_EMAIL)

    const [guest, setGuest] = useState({})

    const [showFullReg, setShowFullReg] = useState(false)
    const [showPhoneReg, setShowPhoneReg] = useState(true)
    const [showGuestEntry, setShowGuestEntry] = useState(false)
    const [showReview, setShowReview] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
  
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (data) => {
      setIsLoading(true)
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY
        });

        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        
  
        await sheet.addRow(data)
  
      } catch (e) {
        console.error('Error ', e);
      }
      setIsLoading(false)
      return
    };


    
    const fetchPhoneNumbers = async (phone) => {
      setIsLoading(true)
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY
        });

        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];

        console.log(sheet)
        const rows = sheet.rowCount;

        await sheet.loadCells(`B2:B${rows}`);

        let storeNumbers = []

        for(let i=1; i < rows; i++) {
          const cellData = sheet.getCell(i,1).value
          
          if (cellData) {
            storeNumbers.push(cellData.toString())
          }
        }

        if(storeNumbers.indexOf(phone) > -1) {
          const selectRow = storeNumbers.indexOf(phone)
          console.log(selectRow)
          const rows = await sheet.getRows()
          const data = rows[selectRow]
          const newGuest = {time: data.time, phone: data.phone, name: data.name, email: data.email, guests: data.guests}

          setGuest({...newGuest})

          
          setShowPhoneReg(false)
          setShowGuestEntry(true)
        } else {

          setGuest(prevState => ({
            ...prevState,
            phone: phone
          }))
    
          setShowPhoneReg(false)
          setShowFullReg(true)
    
        }
        

      } catch (e) {
        console.error('Error ', e);
      }
      setIsLoading(false)

    };



  const addReg = (newUser) => {
    const time = new Date(Date.now())
    setGuest(prevState => ({
      ...prevState,
      time: time.toString(),
      name: newUser.name,
      email: newUser.email,
      guests: newUser.guests,
      phone: newUser.phone
    }))

    setShowFullReg(false)
    setShowGuestEntry(false)
    setShowReview(true)

  }

  const confirmData = (confirm) => {
  
    if(confirm) {
      appendSpreadsheet(guest)

      alert('Information Saved ...')
    } 

    setGuest({})

    setShowReview(false)
    setShowPhoneReg(true)

  }



  return (
    <Container className="p-3">
      
      <Header />
      {isLoading ? <Container><DotLoader css={loader} color="teal"/> </Container>: 
      <Container className="p-5">
          {showPhoneReg && <PhoneReg checkPhone={fetchPhoneNumbers} />}
          {showFullReg && <FullRegistration addReg={addReg} showData={guest}/>}
          {showGuestEntry && <GuestEntry addReg={addReg} showData={guest}/>}
          {showReview && <Review showData={guest} confirm={confirmData}/>}
      </Container>
      }
      
      
     
    </Container>
    
  );
}

export default App;
