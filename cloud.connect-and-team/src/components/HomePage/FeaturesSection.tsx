import toast from "react-hot-toast";

const FeaturesSection = () => {


  return (
    <section id="features" className="min-h-screen pt-28 flex flex-col items-center">
      <button onClick={()=>{toast.success("clicked...")}} >Notifcation</button>
    </section>
  );
};

export default FeaturesSection;
