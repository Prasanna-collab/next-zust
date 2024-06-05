"use client";
import React, { useState } from 'react';
import Card from './payment/Card';
import FormSubmit from './payment/FormSubmit';
import useStore, { Details, FormDetails } from '@/store/store';
interface Props { }

const UserPreference = () => {
    const { formDetails, detail, setDetail, setFormDetails } = useStore();
    console.log(detail)
    const classes = [
        {
            id: 1,
            item: 'class 1',
        },
        {
            id: 2,
            item: 'class 2',
        },
        {
            id: 3,
            item: 'class 3',
        },
        {
            id: 4,
            item: 'class 4',
        },
        {
            id: 5,
            item: 'class 5',
        },
        {
            id: 6,
            item: 'class 6',
        },
        {
            id: 7,
            item: 'class 7',
        },
        {
            id: 8,
            item: 'class 8',
        },
        {
            id: 9,
            item: 'class 9',
        },
        {
            id: 10,
            item: 'class 10',
        },
        {
            id: 11,
            item: 'class 11',
        },
        {
            id: 12,
            item: 'class 12',
        },
    ];
    const classes_board = [
        {
            id: 1,
            item: 'ICSE',
        },
        {
            id: 2,
            item: 'CBSE',
        },
        {
            id: 3,
            item: 'STATE BOARD',
        },
        {
            id: 4,
            item: 'IGSCE',
        },
        {
            id: 5,
            item: 'IB',
        },
        {
            id: 6,
            item: 'OTHER',
        },
    ];
    const subject_data = [
        {
            id: 1,
            item: 'Mathematics',
        },
        {
            id: 2,
            item: 'Science',
        },
        {
            id: 3,

            item: 'English',
        },
        {
            id: 4,

            item: 'Computer Science/IT',
        },
        {
            id: 5,
            item: 'Second Language',
        },
        {
            id: 6,
            item: 'Social Studies',
        },
        {
            id: 7,
            item: 'Biology',
        },
        {
            id: 8,
            item: 'Physics',
        },
        {
            id: 9,
            item: 'Chemistry',
        },
        {
            id: 10,
            item: 'Accountancy',
        },
        {
            id: 11,
            item: 'Business Studies',
        },
        {
            id: 12,
            item: 'Economics',
        },
    ];
    const more_item = [
        {
            id: 1,
            item: 'Foreign Languages',
        },
        {
            id: 2,
            item: 'Junior MBA',
        },
        {
            id: 3,
            item: 'Test Series',
        },
        {
            id: 4,
            item: 'Reference Books',
        },
        {
            id: 5,
            item: 'Question Banks',
        },
        {
            id: 6,
            item: 'NLP Sessions',
        },
        {
            id: 7,
            item: 'Board Prep',
        },
        {
            id: 8,
            item: 'Olympiad Registration',
        },
        {
            id: 9,
            item: 'Biotechnology',
        },
        {
            id: 10,
            item: 'History',
        },
        {
            id: 11,
            item: 'Geography',
        },
        {
            id: 12,
            item: 'Political Science',
        },
    ];

    interface Iclasses {
        id: number,
        item: string
    }

    interface detailProps {
        courseId: string,
        purchaseId: string,
        amount: number,
        classes: string[],
        classes_board: string[],
        subjects: string[],
        more_items: string[],

    }
    const [details, setDetails] = useState<detailProps>({
        courseId: '',
        purchaseId: '',
        amount: 0,
        classes: [],
        classes_board: [],
        subjects: [],
        more_items: [],
    })
    const [show, setShow] = useState('class');
    const handleClass = (item: string) => {
        console.log(item)
        let classes = [...useStore.getState().detail.gradeDetails];

        if (classes.includes(item)) {
            classes = classes.filter((s) => s !== item);
        } else {
            classes.push(item);
        }

        // Update the state with the modified gradeDetails
        useStore.getState().setDetail('gradeDetails', classes);
    }

    const handleClassBoard = (item: any) => {
        let classes_board = [...useStore.getState().detail.boardDetails];
        if (classes_board.includes(item)) {
            classes_board = classes_board.filter((s) => s !== item);
        } else {
            classes_board.push(item);
        }
        useStore.getState().setDetail("boardDetails", classes_board);
    };
    const handleSubject = (sub: any) => {
        let subjects = [...useStore.getState().detail.subjectDetails];
        if (subjects.includes(sub)) {
            subjects = subjects.filter((s) => s !== sub);
        } else {
            subjects.push(sub);
        }
        useStore.getState().setDetail("subjectDetails", subjects);
    };

    const handleMoreItem = (item: any) => {
        let more_items = [...useStore.getState().detail.moreDetails];
        if (more_items.includes(item)) {
            more_items = more_items.filter((s) => s !== item);
        } else {
            more_items.push(item);
        }
        useStore.getState().setDetail("moreDetails", more_items)
    };
    const handleOpen = (item: string) => {
        if (show === item) {
            setShow('');
        } else {
            setShow(item);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const payload: { name: keyof FormDetails; value: string } = {
            name: name as keyof FormDetails,
            value
        };
        setFormDetails(payload);

    };

    return (
        <div className='px-5 py-16 max-sm:pt-10'>
            <div className='relative'>
                <h1 className='text-xl text-center font-[600] text-purple-800 mb-2'>
                    Customise as per your requirement
                </h1>
                <div className='absolute top-8 left-[45%] max-sm:top-18 max-sm:left-[42%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20" fill="none"> {/* Added viewBox */}
                        <path d="M1 11.6721C18.1667 6.17212 59.8 -2.82788 89 5.17212" stroke="#FF9E00" strokeWidth="3" /> {/* Removed stroke-dasharray for solid line */}
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-2  max-md:grid-cols-1 gap-10 max-w-[62.5rem] mx-auto my-8">
                <div className='h-fit grid gap-4'>
                    <Card
                        items={classes}
                        title={`Select Grade`}
                        updateFunction={handleClass}
                        value={detail.gradeDetails}
                        isOpen={show === 'class' ? true : false}
                        setOpen={() => handleOpen('class')}
                        clear={() => {
                            setDetail("gradeDetails", []);
                        }}
                    />
                    <Card
                        items={classes_board}
                        title={'Select Board'}
                        updateFunction={handleClassBoard}
                        value={detail.boardDetails}
                        isOpen={show === 'board' ? true : false}
                        setOpen={() => handleOpen('board')}
                        clear={() => {
                            setDetail("boardDetails", []);
                        }}
                    />
                    <Card
                        items={subject_data}
                        title={'Select subjects'}
                        updateFunction={handleSubject}
                        value={detail.subjectDetails}
                        isOpen={show === 'subject' ? true : false}
                        setOpen={() => handleOpen('subject')}
                        clear={() => {
                            setDetail("subjectDetails", []);
                        }}
                    />
                    <Card
                        items={more_item}
                        title={'Add more items'}
                        updateFunction={handleMoreItem}
                        value={detail.moreDetails}
                        isOpen={show === 'more' ? true : false}
                        setOpen={() => handleOpen('more')}
                        clear={() => {
                            setDetail("moreDetails", []);
                        }}
                    />
                </div>
                <div className='grid gap-4 relative h-fit'>
                    <div className='grid max-w-[30rem] rounded h-fit bg-[#fcf9ff]
                     bg-gradient-to-r from-slate-300  to-orange-100 shadow-xl p-4 gap-4'>
                        <div>
                            <FormSubmit
                                title={`Student Name`}
                                type={`text`}
                                name="fullName"
                                value={formDetails.fullName}
                                placeholder={`Enter Student Name`}
                                onChange={handleChange}
                            />
                        </div>
                        <FormSubmit
                            title={'Email'}
                            type="email"
                            name="email"
                            value={formDetails.email}
                            placeholder={'Enter Your email address'}
                            onChange={handleChange}
                        />
                        <FormSubmit
                            title={'Mobile Number'}
                            type={'text'}
                            name="phone"
                            value={formDetails.phone}
                            placeholder={'Enter Your Phone Number'}
                            onChange={handleChange}
                        />
                        <FormSubmit
                            title={'Amount'}
                            type={'text'}
                            name="amount"
                            value={formDetails.amount}
                            placeholder={'Enter Amount in Numbers'}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPreference;