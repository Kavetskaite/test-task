import {
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FC } from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import slackIcon from "../../../../assets/slack-icon.png";
import "./info-section.scss";
import { DatePickerField } from "../../../../components";
import { useSelector } from "react-redux";
import { selectLabels } from "../../../../store/selectors";
import { getLabelTitle } from "../../../../helpers";

interface InfoSectionProps {
  control: Control<FieldValues, any>;
}

export const InfoSection: FC<InfoSectionProps> = () => {
  const { control } = useForm();

  const labels = useSelector(selectLabels)

  return (
    <div className="info-section">
      <div className="first-section-info">
        <h2 className="general-title">{getLabelTitle(labels, "general-info")}</h2>
        <div className="row-general">
          <TextField
            className="name-input"
            label={getLabelTitle(labels, "first-name")}
            variant="standard"
            autoComplete="off"
          />
          <TextField
            className="name-input"
            label={getLabelTitle(labels, "last-name")}
            variant="standard"
            autoComplete="off"
          />
          <DatePickerField
            control={control}
            className="date-input"
            name="birth"
            label={getLabelTitle(labels, "date-of-birth")}
            // onChange={debounce(onChange, 300)}
          />
        </div>
        <div className="row-general">
          <TextField
            className="contact-input"
            label={getLabelTitle(labels, "email")}
            variant="standard"
            autoComplete="off"
            disabled
          />
          <TextField
            className="contact-input"
            label={getLabelTitle(labels, "personal-email")}
            variant="standard"
            autoComplete="off"
          />
          <TextField
            className="contact-input"
            label={getLabelTitle(labels, "mobile-phone")}
            variant="standard"
            autoComplete="off"
          />
        </div>
        <div className="row-general">
          <DatePickerField
            control={control}
            className="date-input"
            name="date"
            label={getLabelTitle(labels, "start-date")}
            // onChange={debounce(onChange, 300)}
          />
          <TextField
            className="absences-input"
            label={getLabelTitle(labels, "absences")}
            variant="standard"
            autoComplete="off"
          />
          <div className="checkbox-component">
            <FormControlLabel
              control={
                <Checkbox
                  // onChange={handleChange}
                  className="checkbox"
                  name="team"
                />
              }
              label={getLabelTitle(labels, "core-team")}
            />
          </div>
        </div>
      </div>
      <Divider orientation="vertical" className="divider" />
      <div className="second-section-info">
        <h2 className="account-title">{getLabelTitle(labels, "my-accounts")}</h2>
        <TextField
          className="account-input"
          label={getLabelTitle(labels, "slack")}
          placeholder={getLabelTitle(labels, "enter-slack-name")}
          variant="standard"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={slackIcon} className="slack-icon" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="account-input"
          label={getLabelTitle(labels, "github")}
          placeholder="Enter your github user name"
          variant="standard"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon className="github-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};
