import { Fragment } from 'react';
import Classes from '../Styles/Answer.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={Classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={Classes.answer}
              text={option.title}
              key={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${Classes.answer} ${
                option.correct
                  ? Classes.correct
                  : option.checked
                  ? Classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
