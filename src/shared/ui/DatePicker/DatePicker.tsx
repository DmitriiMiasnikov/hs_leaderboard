import React, { FC, useState } from "react";
import { addDays } from "date-fns";
import ru from "date-fns/locale/ru";
import { formatInTimeZone } from "date-fns-tz";
import DatePicker from "react-datepicker";
import { createPortal } from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";

import {
  ClearButton,
  DatePickerField,
  DatePickerTooltip,
  DatePickerWrapper,
} from "./styled";
import { TDate, TDatePickerInput } from "./types";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../button";
import { Icon } from "../icon";
import { dateFormat } from "src/shared/helpers";

const DatePickerInput: FC<TDatePickerInput> = ({
  $width = "auto",
  name = "date-picker",
  placeholder = "",
  disabled = false,
  currentDate,
  minDate = addDays(new Date(), 1),
  maxDate,
  onSubmit = () => {},
  clearable = true,
  offset = [188, -322],
  readOnly = false,
  ...props
}) => {
  const getButtonLabel = () => {
    if (!currentDate) return null;
    if (currentDate[0] && currentDate[1]) {
      return currentDate[0] === currentDate[1]
        ? dateFormat(currentDate[1])
        : `${dateFormat(currentDate[0])} - ${dateFormat(currentDate[1])}`;
    }
  };

  const buttonLabel = getButtonLabel();

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<TDate>(currentDate);

  const startDate = Array.isArray(date) ? date[0] : null;
  const endDate = Array.isArray(date) ? date[1] : null;

  const onVisibleChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setDate(currentDate);
  };

  const { visible, setTriggerRef, setTooltipRef, getTooltipProps } =
    usePopperTooltip({
      trigger: "click",
      offset,
      placement: "right",
      visible: isOpen,
      onVisibleChange: readOnly ? () => {} : onVisibleChange,
      closeOnTriggerHidden: true,
      interactive: true,
      delayHide: 200,
    });

  const onSubmitDate = (newDate: TDate) => {
    onSubmit(newDate);
    setDate(newDate);
    setIsOpen(false);
  };

  const onClearInput = () => {
    onSubmit(undefined);
    setDate(null);
  };

  return (
    <DatePickerWrapper $width={$width} {...props}>
      <>
        <DatePickerField
          type="button"
          data-testid={name}
          data-cy={name}
          empty={!buttonLabel}
          ref={setTriggerRef}
          disabled={disabled}
        >
          {buttonLabel || placeholder}
        </DatePickerField>
        {visible &&
          createPortal(
            <DatePickerTooltip ref={setTooltipRef} {...getTooltipProps()}>
              <DatePicker
                selected={startDate ? new Date(startDate) : undefined}
                startDate={startDate ? new Date(startDate) : null}
                endDate={endDate ? new Date(endDate) : null}
                onChange={(newDate) => {
                  if (Array.isArray(newDate) && newDate[1]) {
                    onSubmitDate(newDate.map((rangeDate) => {
                      if (!rangeDate) return null;
                      rangeDate.setTime(
                        rangeDate.getTime() -
                          rangeDate.getTimezoneOffset() * 60000
                      );
                      return formatInTimeZone(
                        rangeDate.toISOString(),
                        "+00:00",
                        "yyyy-MM-dd"
                      );
                    }));
                    // setDate(
                    //   newDate.map((rangeDate) => {
                    //     if (!rangeDate) return null;
                    //     rangeDate.setTime(
                    //       rangeDate.getTime() -
                    //         rangeDate.getTimezoneOffset() * 60000
                    //     );
                    //     return formatInTimeZone(
                    //       rangeDate.toISOString(),
                    //       "+00:00",
                    //       "yyyy-MM-dd"
                    //     );
                    //   })
                    // );
                    // if (newDate[1]) {
                    //   onSubmitDate();
                    // }
                  }
                }}
                dateFormat="dd.MM.yyyy"
                minDate={minDate}
                maxDate={maxDate}
                locale={ru}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                shouldCloseOnSelect={false}
                selectsRange={true}
                inline
              ></DatePicker>
            </DatePickerTooltip>,
            document.body
          )}

        {!readOnly && (
          <ClearButton>
            <Button
              variant="hollow"
              iconType="only"
              size="small"
              icon={
                <Icon
                  name={clearable && buttonLabel ? "close" : "calendar"}
                  $size={16}
                  $color="grey_300"
                />
              }
              onClick={
                clearable && buttonLabel ? onClearInput : () => setIsOpen(true)
              }
              disabled={disabled}
            />
          </ClearButton>
        )}
      </>
    </DatePickerWrapper>
  );
};

export default DatePickerInput;
