import QuestionsForm from '@/components/questions/FormContext';

function Questions() {
  return (
    <div className='min-h-[75vh] bg-white border rounded-lg shadow-md text-black text-center py-12 my-8 px-3 m-3 flex items-center md:mx-14 md:px-16 lg:mx-32'>
      <QuestionsForm />
    </div>
  );
}

export default Questions;
