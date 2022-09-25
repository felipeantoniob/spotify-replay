import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

export type TimeRangeType = 'long_term' | 'medium_term' | 'short_term'

type RadioButtonProps = {
  timeRange: TimeRangeType
  handleChange: ChangeEventHandler<HTMLInputElement>
  value: string
  label: string
}

const RadioButton = ({ timeRange, handleChange, value, label }: RadioButtonProps) => (
  <input
    type="radio"
    name="time-range"
    data-title={label}
    value={value}
    checked={timeRange === value}
    onChange={handleChange}
    className="border:none btn btn-ghost no-animation border-transparent bg-transparent capitalize text-gray-400 underline-offset-8 checked:bg-transparent checked:text-gray-200 checked:underline hover:text-gray-200"
  />
)

type TimeRangeRadioProps = {
  timeRange: TimeRangeType
  setTimeRange: Dispatch<SetStateAction<TimeRangeType>>
}

const TimeRangeRadio = ({ timeRange, setTimeRange }: TimeRangeRadioProps): JSX.Element => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimeRange(e.currentTarget.value as 'long_term' | 'medium_term' | 'short_term')
  }

  return (
    <div className="btn-group">
      <RadioButton
        timeRange={timeRange}
        handleChange={handleChange}
        value="long_term"
        label="All Time"
      />
      <RadioButton
        timeRange={timeRange}
        handleChange={handleChange}
        value="medium_term"
        label="Last 6 Months"
      />
      <RadioButton
        timeRange={timeRange}
        handleChange={handleChange}
        value="short_term"
        label="This Month"
      />
    </div>
  )
}

export default TimeRangeRadio
