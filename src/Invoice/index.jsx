import invoiceBackground from '../assets/invoice.jpeg'

const Invoice = () => {
  return (
    <div className="w-full absolute h-screen -z-20" style={{
      backgroundImage: `url(${invoiceBackground})`
    }}>
      <div className="bg-gray-100  w-full mx-auto px-80 py-20 mt-32">
        <div className=" text-left">
          <p className=" text-xl">Your invoice has been generated</p>
          <p>Hi testuser1,</p>
          <p>Your order from Dating APP been confirmed.</p>
        </div>
        <div className=" text-left mt-6">
          Your invoice ID is: <span className=" font-bold ml-3 text-lg">34LV40115073</span>
          <p className=" mt-6"> </p>
          <p>A confirm email will send to your email address and help you check the detail information of this order.</p>
          <p className=" italic">Do you have some confussion? Your feedback will help us provide a better delivery
          experience.</p>
        </div>
        <div className=" text-left mt-8">
          <p>Thanks,</p>
          <p>Dating APP</p>
          
        </div>
      </div>
    </div>
  );
};

export default Invoice;
