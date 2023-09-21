'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuestionsSchema1, QuestionsSchemaType1 } from '@/utils/schemas';
import { apiAddress, departments, faculties, levels } from '@/utils/variables';
import SelectOptions from '../SelectOptions';
import AuthContext from '../AuthContext';
import { useContext } from 'react';

function QuestionsForm() {
  const { user, authChecking, signout }: { user: {}; authChecking: boolean } =
    useContext(AuthContext);
  const initialFormValues = {
    faculty: '',
    department: '',
    level: '',
    course: '',
    q: [
      {
        answer: '',
        options: { A: '', B: '', C: '', D: '' },
        question: ''
      }
    ]
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<QuestionsSchemaType1>({
    mode: 'onSubmit',
    resolver: zodResolver(QuestionsSchema1),
    defaultValues: initialFormValues as QuestionsSchemaType1
  });

  console.log({ what: errors });

  const {
    fields: questionFields,
    append: appendQuestion,
    remove
  } = useFieldArray({
    name: `q`,
    control
  });

  console.log(errors);

  const next = async (qs: QuestionsSchemaType1) => {
    console.log(qs);
    const res = await fetch(`${apiAddress}/admin/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(qs)
    });
    const data = await res.json();
    if (res.ok) {
      alert('Questions submitted successfully');
      reset();
      console.log(data);
    } else {
      alert(data?.message);
    }
  };

  return (
    <div>
      {' '}
      {authChecking ? (
        <p className='text-center text-lg'>Loading...</p>
      ) : (
        <>
          {!authChecking && !user?.admin ? (
            <p className='text-center text-red-600 text-lg'>
              This page is for only admins. You are not authorised to access
              this page {user?.admin}
            </p>
          ) : (
            <div className='flex gap-11 flex-col w-full'>
              <h2 className='text-secondary dark:text-white text-4xl font-bold'>
                Add Questions
              </h2>
              <div className='flex flex-col gap-3'>
                <form
                  onSubmit={handleSubmit(next)}
                  className='flex flex-col gap-10'>
                  <SelectOptions
                    placeholder={'--Select Faculty--'}
                    desc={'Faculty:'}
                    err={errors?.faculty?.message}
                    reg={register('faculty')}
                    values={faculties}
                  />
                  <SelectOptions
                    placeholder={'--Select Department--'}
                    desc={'Department:'}
                    err={errors?.department?.message}
                    reg={register('department')}
                    values={departments}
                  />
                  <SelectOptions
                    placeholder={'--Select Level--'}
                    desc={'Level:'}
                    err={errors?.level?.message}
                    reg={register('level')}
                    values={levels}
                  />
                  <div>
                    <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                      <div>
                        <p className='w-max'>Course:</p>
                      </div>
                      <input
                        {...register('course')}
                        placeholder='Type the name of the course here'
                        className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                      />
                    </label>
                    <span className='text-red-400 dark:text-red-300 text-xs'>
                      {errors?.course?.message}
                    </span>
                  </div>
                  {questionFields.map((quests, i) => (
                    <div
                      key={i}
                      className='flex flex-col gap-10 border mt-8 px-2 py-4 rounded-lg'>
                      <span className='flex justify-between'>
                        <p className='text-center text-xl'>Question {i + 1}</p>
                        <button
                          className='text-white bg-secondary px-5 py-2 rounded-lg'
                          type='button'
                          onClick={() => remove(i)}>
                          Delete Question {i + 1}
                        </button>
                      </span>
                      <div>
                        <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                          <div>
                            <p className='w-max'>Question:</p>
                          </div>
                          <input
                            {...register(`q.${i}.question`)}
                            placeholder='Type the question here'
                            type='text'
                            className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                          />
                        </label>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {errors?.q?.[i]?.question?.message}
                        </span>
                      </div>
                      <div>
                        <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                          <div>
                            <p className='w-max'>Option (A):</p>
                          </div>
                          <input
                            {...register(`q.${i}.options.A`)}
                            placeholder='Type option (A) here'
                            type='text'
                            className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                          />
                        </label>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {' '}
                          {errors?.q?.[i]?.options?.A?.message}
                        </span>
                      </div>
                      <div>
                        <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                          <div>
                            <p className='w-max'>Option (B):</p>
                          </div>
                          <input
                            {...register(`q.${i}.options.B`)}
                            placeholder='Doe'
                            type='text'
                            className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                          />
                        </label>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {' '}
                          {errors?.q?.[i]?.options?.B?.message}
                        </span>
                      </div>
                      <div>
                        <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                          <div>
                            <p className='w-max'>Option (C):</p>
                          </div>
                          <input
                            {...register(`q.${i}.options.C`)}
                            placeholder='Doe'
                            type='text'
                            className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                          />
                        </label>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {' '}
                          {errors?.q?.[i]?.options?.C?.message}
                        </span>
                      </div>
                      <div>
                        <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                          <div>
                            <p className='w-max'>Option (D):</p>
                          </div>
                          <input
                            {...register(`q.${i}.options.D`)}
                            placeholder='Doe'
                            type='text'
                            className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                          />
                        </label>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {' '}
                          {errors?.q?.[i]?.options?.D?.message}
                        </span>
                      </div>
                      <div className=''>
                        <span className='flex gap-2 items-center'>
                          <p className='min-w-max'>Correct Answer:</p>
                          <select
                            {...register(`q.${i}.answer`)}
                            className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
                            <option value=''>
                              --Select the correct answer--
                            </option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                          </select>
                        </span>
                        <span className='text-red-400 dark:text-red-300 text-xs'>
                          {' '}
                          {errors?.q?.[i]?.answer?.message}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div
                    className='text-6xl font-light'
                    onClick={() => appendQuestion(initialFormValues.q)}>
                    +
                  </div>
                  ;
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='flex gap-1 py-2 px-5 rounded-lg shadow-md bg-secondary text-white w-max m-auto'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QuestionsForm;
