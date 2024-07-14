import React from 'react';
import { MdOutlineAddCard } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { db } from '../../firebase'; // Adjust the path to your firebase configuration
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"; // Import Firestore methods for querying

const PaymentCard = ({ onPay, order }) => {
  const { OrderID, Scrapper, TotalBill, Items, Status, Name } = order;

  // Parse Items array and calculate total price
  const parsedItems = Items.map((item) => {
    const [name, rate, qty] = item.split('/');
    const totalPrice = parseFloat(rate) * parseInt(qty);
    return { name, quantity: `${qty} KG`, price: `₹ ${totalPrice}` };
  });

  // Calculate total bill amount
  const totalBillAmount = parsedItems.reduce((acc, curr) => acc + parseFloat(curr.price.split('₹ ')[1]), 0);

  // Function to handle payment and update Firestore
  const handlePayment = async () => {
    try {
      // Update order status
      const orderDocRef = doc(db, 'orders', OrderID); // Reference to the order document
      await updateDoc(orderDocRef, {
        Status: 4 // Update the status to 4
      });

      // Fetch Scrapper document
      const scrapperDocRef = doc(db, 'scrappers', Scrapper); // Reference to the scrapper document
      const scrapperDocSnap = await getDoc(scrapperDocRef);
      if (scrapperDocSnap.exists()) {
        const scrapperData = scrapperDocSnap.data();
        const currentTotalBalance = scrapperData.TotalBalance || 0;
        const newTotalBalance = currentTotalBalance + totalBillAmount;

        // Update Scrapper's TotalBalance
        await updateDoc(scrapperDocRef, {
          TotalBalance: newTotalBalance
        });
        console.log('Scrapper TotalBalance updated successfully');
      } else {
        console.error('No such scrapper document!');
      }

      console.log('Order status updated successfully');
      onPay(); // Trigger parent component's onPay function
    } catch (error) {
      console.error('Error updating order status or scrapper total balance:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', backgroundColor: '#fafafa', border: '.08rem solid black', borderRadius: 10, flex: 1, width: "90%", margin: 10 }}>
      <span style={{ paddingLeft: '.1rem', fontSize: '2rem', fontFamily: 'DMSB' }}>Do Payment</span>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
        {parsedItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: '1px solid #CBC7C7',
              padding: '5px 8px',
              borderRadius: 5,
              color: '#7F7F7F',
              fontFamily: 'DMR',
              marginRight: 10,
              marginTop: '1rem',
              alignItems: 'stretch',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <span>{item.name}</span>
              <span style={{
                backgroundColor: '#65C047',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '5px 8px',
                borderRadius: '0 5px 5px 0',
                position: 'relative',
                left: '10px',
                color: 'white',
                fontFamily: 'DMSB',
              }}>
                {item.quantity}
              </span>
            </div>
            <div style={{
              width: '5%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              marginLeft: '10px',
              fontSize: '1.3rem',
              fontFamily: 'DMB',
              color: '#65C047',
            }}>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem' }}>
        <MdOutlineAddCard style={{ fontSize: '4rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '.8rem', fontFamily: 'DMSB' }}>Total Bill Amount</span>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span style={{ fontSize: '2rem', fontFamily: 'DMB' }}>₹ </span>
            <span style={{ fontSize: '2.3rem', marginLeft: '.3rem', color: 'green', fontFamily: 'DMB', marginTop: '.3rem' }}>{totalBillAmount}</span>
          </div>
        </div>
      </div>
      <button
        style={{
          backgroundColor: '#000125',
          border: '0.1rem solid black',
          width: '100%',
          borderRadius: 20,
          fontSize: '1.2rem',
          color: '#ffffff',
          fontFamily: 'DMB',
          padding: '.7rem',
          marginTop: '3rem',
          cursor: 'pointer',
        }}
        onClick={handlePayment} // Call handlePayment when button is clicked
      >
        Pay Now
        <FaArrowRight style={{ marginLeft: '1rem', position: 'relative', top: '0.3rem', fontSize: '1.5rem' }} />
      </button>
    </div>
  );
};

export default PaymentCard;
