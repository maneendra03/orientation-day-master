import { useEffect, useState } from 'react'
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import './App.css'
import logo from "./assets/logo.png"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import db from "./config"
import { addDoc, collection, getDocs, query, refEqual, where } from 'firebase/firestore';
import brochure from './assets/College Brochure.pdf'
import contacts from './assets/Contact Details.pdf'
import rules from './assets/Rules and Regulation.pdf'
import afternoon from './assets/Afternoon Session Schedule.pdf'
import Forenoon from './assets/Forenoon Session Schedule.pdf'





function App() {


  const [department, setDepartment] = useState("");
  const [register, setRegister] = useState(false)
  const [quota, setQuota] = useState("")

  const options = [
    "Computer Science & Engineering (CSE)",
    "Electrical & Electronics Engineering (EEE)",
    "Electronics & Communication Engineering (ECE)",
    "Mechanical Engineering (MEC)",
    "Civil Engineering (CIV)",
    "Computer Science & Engineering-Data Science (CSD)",
    "Computer Science & Engineering- AI & ML (CSM)",

  ];
  const short = [
    "cse",
    "eee",
    "ece",
    "mec",
    "civ",
    "csd",
    "csm"
  ]

  const _handleDepartment = (e) => {
    const d = e.value;
    var ind = 0;
    for(var i = 0 ; i < options.length ; i++){
      if(d == options[i]){
        ind = i;
        break;
      }
    }   
    setDepartment(short[ind]);
  };





  const _handleRegister = (e) => {
    setRegister(true);
  };


  const [dis1, setDis1] = useState(true);
  const [dis2, setDis2] = useState(true);
  const [dis3, setDis3] = useState(true);
  const [dis4, setDis4] = useState(true);



  const _handleDetails = (e) => {
    e.preventDefault();
    results.post("/attendance.json", list).then((response) => {
      console.log(response);
      alert("Data submitted successfully");
    });
  }

  const _handleFN = (e) => {
    fetch('assets/Forenoon Session Schedule.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'assets/Forenoon Session Schedule.pdf';
        alink.click();
      })
    })
  }
  const _handleAN = (e) => {
    setDis1(false);
    fetch("assets/Afternoon Session Schedule.pdf").then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/Afternoon Session Schedule.pdf";
        alink.click();
      })
    })
  }

  const _handleContact = (e) => {
    setDis2(false);
    fetch("assets/Contact Details.pdf").then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/Contact Details.pdf";
        alink.click();
      })
    })
  }

  const _handleRules = (e) => {
    setDis3(false);
    fetch("assets/Rules and Regulation.pdf").then(response => {
      response.blob().then(blob => { 
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/Rules and Regulation.pdf";
        alink.click();
      })
    })
  }


  const _handleBrochure = (e) => {
    // console.log("Triggered")
    // setDis4(false);
    // fetch("assets/College Brochure.pdf").then(response => {
    //   console.log(response)
    //   response.blob().then(blob => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     console.log(fileURL);
    //     // Setting various property values
    //     let alink = document.createElement('a');
    //     alink.href = fileURL;
    //     alink.download = "assets/College Brochure.pdf";
    //     alink.click();
    //   })
    // })
      
  }



  const [data, setData] = useState([])
  const [sdata, setsData] = useState([]);
  const _handleQuota = async (e) => {
    setQuota(e.value)

    if (e.value == "Management Quota") {

      setQuota(e.value);
      if (e.value === "Management Quota") {
        if (department === "Computer Science & Engineering (CSE)") {
          const collectionRef = collection(db, "cse");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        } else if (department === "Electrical & Electronics Engineering (EEE)") {
          const collectionRef = collection(db, "eee");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }
        else if (department === "Electronics & Communication Engineering (ECE)") {
          const collectionRef = collection(db, "ece");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }
        else if (department === "Mechanical Engineering (MEC)") {
          const collectionRef = collection(db, "mech");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }
        else if (department === "Civil Engineering (CIV)") {
          const collectionRef = collection(db, "civil");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }

        
        else if (department === "Computer Science & Engineering-Data Science (CSD)") {
          const collectionRef = collection(db, "csd");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }
        else if (department === "Computer Science & Engineering- AI & ML (CSM)") {
          const collectionRef = collection(db, "csm");
          const querySnapshot = await getDocs(collectionRef);
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setsData(fetchedData);
        }

      }

    }
    console.log(quota)
  }


  const [value, setValue] = useState('');
  const [form, setForm] = useState(false)
  const handleChange = (event) => {
    setValue(event.target.value);
    setForm((prev) => !prev)
  };



  // const [rank, setRank] = useState(0);
  // const [studentName, setStudentName] = useState('');

  // const _handleRank = (e) => {
  //   const newRank = e.target.value; // Get the new rank value from the input
  //   setRank(newRank); // Update the rank state
  // };



  const [student_r, setStudent_r] = useState("")


  const [rankToFetch, setRankToFetch] = useState(1); // State for the rank to fetch

  const fetchStudent = async () => {
    try {
      const rank = parseInt(document.getElementById('inputRank').value)
      // const rank = 59038
      console.log("rank is , ", rank)
      const q = query(collection(db, 'convener'), where('rank', '==', rank)); // Use rankToFetch in the query
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const studentDoc = querySnapshot.docs[0].data().name;
        const dpt = querySnapshot.docs[0].data().bnc;
        console.log(studentDoc)

        setValue(studentDoc);
        setStudent_r(dpt)
        setForm((prev) => !prev)
      } else {
        console.log('No student found with the given condition.');
      }
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };










const [sno, setSno] = useState('');
const [pno, setPno] = useState('');
const [fname, setFname] = useState('');
const [mname, setMname]=useState('');
const [count, setCount] = useState('');
const [sname, setsName] = useState('');
  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, 'registrations'); // Replace with your collection name
      await addDoc(collectionRef, {
        sNumber: sno,
        pNumber: pno,
        count: count,
        sname: value,
        fathername: fname,
        mothername: mname,

      });
      console.log('Document added successfully');
      setSno('');
      setPno('');
      setCount('');
      setsName('');
      setFname('');
      setMname('');
      
      alert('Form Submitted')
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };







  return (
    <div style={{
      width: '100vw'
    }} >
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="contain" >
      <Container sx={{
            width: { xs: "95vw", md: '70vw' }, // Adjust width as needed
            maxWidth: '1200px', // Set a max width to avoid stretching too much
            bgcolor: '#fff',
            borderRadius: '30px',
            padding: '50px',
            boxSizing: 'border-box', // Ensure padding is included in the width calculation
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            margin: '0 auto', // Center horizontally
            top: '150px',
            bottom: '450px', // Adjust as needed
        }} >
            <img src={logo} width={'99%'} style={{
                marginBottom: '20px'
            }} />

            <Typography color={"#1e4160"} textAlign={'center'} fontWeight={'bold'} sx={{
                fontSize: { xs: '1.5rem', md: '1.7rem' },
                marginBottom: '30px',
                width: '100%'
            }} >Welcome to the Orientation Day <br />
                for batch of 2024-28</Typography>

            <Typography color={"#1e4160"} textAlign={'center'} sx={{
                fontSize: { xs: '1.25rem', md: '1.3rem' },
                marginBottom: '20px'
            }} fontWeight={'bold'}>Choose Your Department</Typography>

            <div className='drop'>
                <Dropdown
                    options={options}
                    onChange={_handleDepartment}
                    placeholder="Select an option"
                />
            </div>

            {department && (
                <div style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '30px',
                }}>
                    <Typography sx={{
                        color: '#1e4160',
                        fontSize: { xs: '1.2rem', md: '1.3rem' },
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>Please download the files below to continue</Typography>
                    {
                      (department == short[0] || department == short[1] || department == short[2]) ? 
                      <a href={Forenoon} download="Forenoon" target='_blank'>Schedule of Orientation Day.pdf{' '}</a>
                      :
                      <a href={afternoon} download="afternoon" target='_blank'>Schedule of Orientation Day.pdf{' '}</a>
                    }
                    <br /><br />
                    <a href={contacts} download="contacts" target='_blank'>Contact Details 2024-2025.pdf{' '}</a>
                    <br /><br />
                    <a href={rules} download="rules" target='_blank'>Rules and Regulations.pdf{' '}</a>
                    <br /><br />
                    <a  href={brochure} download="brochure" target='_blank' >College Brochure.pdf{' '}</a>
                    <br /><br />
                    <button
                        disabled={dis1 && dis2 && dis3 && dis4}
                        type="button"
                        className="btn btn-primary"
                        onClick={_handleRegister}
                    >
                        Register
                    </button>
                </div>
            )}

            {register && (
                <div style={{
                    padding: '30px'
                }}>
                    <div className='drop2'>
                        <Dropdown
                            options={['Convener Quota', 'Management Quota']}
                            placeholder="Select an option"
                            onChange={_handleQuota}
                        />
                    </div>

                    {quota === "Management Quota" ? (
                        <div style={{
                            marginTop: '30px'
                        }}>
                            <Stack gap={2}>
                                <Typography color={'#1e4160'} textAlign={'center'} fontSize={'1.5rem'} fontWeight={'bold'}>Management Quota</Typography>
                                <Typography color={'#1e4160'} textAlign={'center'} fontSize={'1.1rem'}>Please choose your name:</Typography>
                            </Stack>
                            <Stack direction={'column'} gap={2} marginTop={'10px'} alignItems={'center'}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Choose an option</FormLabel>
                                    <RadioGroup
                                        aria-label="options"
                                        name="options"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        {sdata.map((item, idx) => (
                                            <FormControlLabel key={idx} value={item.name} control={<Radio />} label={item.name} sx={{
                                                marginBottom: '20px'
                                            }} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </div>
                    ) : quota === "Convener Quota" ? (
                        <>
                            <div>
                                <Typography color={'#1e4160'} textAlign={'center'} fontSize={'1.5rem'} fontWeight={'bold'}>Convener Quota</Typography>
                                <div className="inputbox">
                                    <label>Please Enter Your Rank: </label>
                                    <br /><br />
                                    <input className="inp"
                                        type="number"
                                        placeholder='Rank'
                                        id='inputRank'
                                    />
                                    <br /><br />
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={fetchStudent}
                                    >
                                        Get Details
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : null}

                    {form && (
                        <>
                            <Stack gap={4} marginTop={'50px'}>
                                <Stack>
                                    <Typography color={'#1e4160'} fontSize={'1.25rem'} textAlign={'center'} fontWeight={'bold'}>Student Details</Typography>
                                    <Stack gap={4} marginTop={'20px'}>
                                        <Stack gap={1}>
                                            <Typography textAlign={'center'} fontSize={'1.2rem'} color={'#1e4160'}>Name:</Typography>
                                            <Typography textAlign={'center'} sx={{
                                                fontSize: '1.2rem',
                                                color: '#1e4160',
                                                fontWeight: 300
                                            }} key={department}>{value}</Typography>
                                        </Stack>

                                        <Stack gap={1}>
                                            <Typography textAlign={'center'} fontSize={'1.2rem'} color={'#1e4160'}>Department:</Typography>
                                            <Typography textAlign={'center'} sx={{
                                                fontSize: '1.2rem',
                                                color: '#1e4160',
                                                fontWeight: 300
                                            }} color={'#1e4160'} key={department}>{quota === "Management Quota" ? department : student_r}</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography color={'#1e4160'} fontSize={'1.2rem'} textAlign={'center'} fontWeight={'bold'}>Please Fill The Details Below</Typography>
                                    <div style={{
                                        width: '100%',
                                        maxWidth: '700px', // Ensure max width for large screens
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        margin: 'auto',
                                        padding: '20px',
                                        boxSizing: 'border-box'
                                    }}>
                                        <form onSubmit={_handleSubmit} style={{ width: '100%' }}>

                                        <div style={{ width: '100%', textAlign: 'center' }}>
                                                <label style={{
                                                    fontSize: '1.2rem',
                                                    display: 'block',
                                                    marginBottom: '10px'
                                                }}>Enter Your Father's name as per your SSC Memo:</label>

                                                <input
                                                    className='inp'
                                                    required
                                                    type="text"
                                                    placeholder="Father's Name"
                                                    onChange={(e) => setFname(e.target.value)}
                                                    style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
                                                />
                                            </div>


                                            <div style={{ width: '100%', textAlign: 'center' }}>
                                                <label style={{
                                                    fontSize: '1.2rem',
                                                    display: 'block',
                                                    marginBottom: '10px'
                                                }}>Enter Your Mother's name as per your SSC Memo:</label>
                                                
                                                <input
                                                    className='inp'
                                                    required
                                                    type="text"
                                                    placeholder="Mother's Name"
                                                    onChange={(e) => setMname(e.target.value)}
                                                    style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
                                                />
                                            </div>

                                            <div style={{ width: '100%', textAlign: 'center' }}>
                                                <label style={{
                                                    fontSize: '1.2rem',
                                                    display: 'block',
                                                    marginBottom: '10px'
                                                }}>Enter Your Mobile Number:</label>
                                                <input
                                                    className='inp'
                                                    required
                                                    type="text"
                                                    placeholder="10 digit mobile number"
                                                    onChange={(e) => setSno(e.target.value)}
                                                    style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
                                                />
                                            </div>

                                            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                                                <label style={{
                                                    fontSize: '1.2rem',
                                                    display: 'block',
                                                    marginBottom: '10px'
                                                }}>Enter Your Parent Mobile Number:</label>
                                                <input
                                                    className='inp'
                                                    required
                                                    type="text"
                                                    placeholder="10 digit mobile number"
                                                    onChange={(e) => setPno(e.target.value)}
                                                    style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
                                                />
                                            </div>

                                            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                                                <label style={{
                                                    fontSize: '1.2rem',
                                                    display: 'block',
                                                    marginBottom: '10px'
                                                }}>Number of people attending the Orientation:</label>
                                                <input
                                                    className='inp'
                                                    required
                                                    type="number"
                                                    placeholder="Enter the count"
                                                    onChange={(e) => setCount(e.target.value)}
                                                    style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
                                                />
                                            </div>

                                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                                <button type="submit" className="button1" style={{
                                                    padding: '10px 20px',
                                                    fontSize: '1rem',
                                                    cursor: 'pointer'
                                                }}>
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Stack>
                            </Stack>
                        </>
                    )}
                </div>
            )}
</Container>
</div>

    </div>
  )

}

export default App
