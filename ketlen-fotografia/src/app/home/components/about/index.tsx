import Image from 'next/image';

const About = () => {
  return (
    <div className="mt-56 flex items-center justify-between">
      <div className="h-[800px] w-[700px] bg-gray-900">
        <Image src={''} alt="" />
      </div>
      <div className="mr-20 flex max-w-[550px] flex-col items-center gap-12">
        <h1 className="text-4xl">Quem sou eu?</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
          eros vel neque lobortis, sit amet mattis diam dapibus. Nam congue
          porta elementum. Nam quis malesuada eros, ut fermentum tellus. Sed
          mollis a ex at volutpat. Morbi eleifend odio neque, eget blandit
          tortor feugiat ut. Praesent suscipit sapien ligula, eu hendrerit justo
          placerat et. Sed a dui eget ligula consequat convallis. Aenean
          sodaldes neque sed orci bibendum consequat. Vestibulum auctor diam
        </p>
      </div>
    </div>
  );
};

export default About;
