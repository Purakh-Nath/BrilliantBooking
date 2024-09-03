import Widget1 from '../components/Widget1';
import Widget2 from '../components/Widget2';

export default function Home() {
  return (
    <div className='p-10 min-h-screen bg-[#1e1e1e] bg-gradient-to-b from-[#252a2e] to-[#191B1F] text-textcolor1 text-lg'>
      <div className="flex justify-between">
        <div className="">
          {/* Additional content can be placed here */}
        </div>
        <div className="">
          <Widget1 />
          <br />
          <div className="m-auto customShadow bg-gradient-to-b from-[#282828] p-0.5 w-10/12"></div>
          <br />
          <Widget2 />
          <br />
          <div className="m-auto customShadow bg-gradient-to-b from-[#282828] p-0.5 w-10/12"></div>
        </div>
      </div>
    </div>
  );
}
