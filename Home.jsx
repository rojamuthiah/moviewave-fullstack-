
import React,{useState} from 'react';
import '../CSS/Home.css';

const FaqItem =({question,answer})=>{
  const[show,setShow]=useState(false);


  const toggleShow =()=>{
    setShow(!show);

  };
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      {show && (
        <div className="faq-item-body">
          <div className="faq-item-body-content">{answer}</div>
        </div>
      )}
    </div>
  );
};



const FaqAccordion = ({data}) =>{
      return (
      <div className="faq-accordion">
        <h5>AVAILABLE PLANS</h5>
        {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
        
      </div>
      );
      
      
};
const data = [
 
  {id:1,question:"click to know about 999 membership plan",answer:"999 membership plan allows you to binge on every devices and  maximum device capacity is upto 5 login on different devices "},
  {id:2,question:"click to know about 499 membership plan",answer:"499 membership plan allows you to binge on Lap and mobile and maximum device capacity is upto 3 login on different devices "},
  {id:3,question:"click to know about 199 membership plan",answer:"199 membership plan allows you to binge on mobile device alone and maximum device capacity is upto 2 login on different devices "}

];



function Home() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_Tf2fTGSnXNLTJm",
        key_secret:"50H4lA14kk2ihn9KiDdDIe5d",
        amount: amount *100,
        currency:"INR",
        name:"moviewave",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"roja muthiah",
          email:"romu0304@gmail.com",
          contact:"9962036239"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="Home">
     <div className="pay-container">
     <h2 className='pln'>read about the plans and enter the amount to pay..thank you!</h2>
     <br/>
     <input className='amt' type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"onClick={handleSubmit}>submit</button>
     </div>
     <div  className="visual">
      <div className="xxx">
      <FaqAccordion data={data}/>
      </div>
      <div>
      <img src="pays.png"/>
      </div>
     </div>
    </div>
    
    
  );
}

export default Home;
