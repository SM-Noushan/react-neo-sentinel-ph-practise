import PropTypes from "prop-types";
const SectionHeader = ({ title, styles = "" }) => {
  return (
    <h2 className={`text-xl text-dark-02 font-semibold ${styles}`}>{title}</h2>
  );
};
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
export default SectionHeader;
