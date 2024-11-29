import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const AccordionComponent = () => {
    return (
        <div className="w-11/12 mx-auto text-lg text-white  font-bold ">
            <Accordion defaultIndex={[1]} allowMultiple>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={item.value} className="py-3">
                        <h2>
                            <AccordionButton className={'truncate'}>
                                <AccordionIcon />
                                {item.title}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>{item.text}</AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default AccordionComponent;

const items = [
    { value: 'a', title: '넷플릭스란 무엇인가요?', text: 'Some value 1...' },
    { value: 'b', title: '넷플릭스 요금은 얼마인가요?', text: 'Some value 2...' },
    { value: 'c', title: '어디에서 시청할 수 있나요?', text: 'Some value 3...' },
    { value: 'd', title: '멤버십을 해지하려면 어떻게 해야하나요?', text: 'Some value 4...' },
    { value: 'e', title: '넷플릭스에서 어떤 컨텐츠를 시청할 수 있나요?', text: 'Some value 5...' },
    { value: 'f', title: '아이들이 넷플릭스를 봐도 좋을까요?', text: 'Some value 6...' },
];
