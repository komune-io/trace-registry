import { connect } from "react-redux";
import { State } from "store";
import { filters } from "store/filters";
import { evidence } from "store/evidence";

const mapStateToProps = (state: State) => ({
    filters: filters.selectors.filters(state),
    evidenceTypeAdded: evidence.selectors.evidenceTypeAdded(state),
    evidenceTypeLists: evidence.selectors.evidenceTypeLists(state),
    evidenceTypeMapped: evidence.selectors.evidenceTypeMapped(state),
    evidenceTypeListsFetchStatus: evidence.selectors.fetchStatus(state),
});

const mapDispatchToProps = {
    changeFilters: filters.actions.changeFilters,
    changeEvidence: filters.actions.changeEvidence,
    addEvidenceType: evidence.actions.addEvidenceType,
    setEvidenceTypeAdded: evidence.actions.setEvidenceTypeAdded,
    fetchEvidenceTypeLists: evidence.actions.fetchEvidenceTypeLists,
};

export default connect(mapStateToProps, mapDispatchToProps);
