import { Stepper, Section, StepItem, AutoForm, Actions, FormComposableState, autoFormFormatter, CommandWithFile } from '@smartb/g2'
import { useTranslation } from 'react-i18next'
import { useMemo, useCallback } from 'react'
import { AppPage } from 'template'
import { Link, useNavigate, useParams } from 'react-router-dom'
import summaryForm from "./projectSummaryForm.json"
import locationForm from "./projectLocationForm.json"
import financialDetailsForm from "./financialDetailsForm.json"
import { useRoutesDefinition } from 'components'
import { ArrowBackRounded } from '@mui/icons-material'


const forms = [
    summaryForm,
    locationForm,
    financialDetailsForm
]

export const ProjectCreate = () => {
    const { step } = useParams()
    const activeStep = Number(step)
    const { t } = useTranslation()
    const {projectsCreateStep} = useRoutesDefinition()
    const navigate = useNavigate()

    const steps = useMemo((): StepItem[] => [{
        key: "summary",
        label: t("projects.summary")
    }, {
        key: "location",
        label: t("projects.location")
    }, {
        key: "finance",
        label: t("projects.financialDetails")
    }], [t])

    const getActions = useCallback((formState: FormComposableState) => (
        <Actions 
        actions={[{
            key: "goBack",
            label: t("goBack"),
            variant: "text",
            startIcon: <ArrowBackRounded />,
            showIf: () => activeStep > 0,
            component: Link,
            componentProps: {
                to: projectsCreateStep(`${activeStep - 1}`)
            }
        }, {
            key: "next",
            label: t("next"),
            onClick: formState.submitForm
        }]} 
        />
    ) , [t, activeStep])

    const onSubmit = useCallback(
      (command: CommandWithFile<any>) => {
        console.log(command)
        navigate(projectsCreateStep(`${activeStep + 1}`))
      },
      [navigate, activeStep],
    )
    

    return (
        <AppPage
            title={t("createAProject")}
        >
            <Section
                headerProps={{
                    freeContent: (
                        <Stepper
                            steps={steps}
                            activeStep={activeStep}
                            orientation='horizontal'
                        />
                    )
                }}
            >
                <AutoForm
                    formData={autoFormFormatter(forms[activeStep])}
                    onSubmit={onSubmit}
                    getFormActions={getActions}
                />
            </Section>
        </AppPage>
    )
}
