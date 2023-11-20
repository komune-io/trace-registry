import { Stepper, Section, StepItem, AutoForm, Actions, FormComposableState, autoFormFormatter } from '@smartb/g2'
import { useTranslation } from 'react-i18next'
import { useMemo, useCallback } from 'react'
import { AppPage } from 'template'
import { Link, useParams } from 'react-router-dom'
import summaryForm from "./projectSummaryForm.json"
import { useRoutesDefinition } from 'components'


const forms = [
    summaryForm
]

export const ProjectCreate = () => {
    const { step } = useParams()
    const activeStep = Number(step)
    const { t } = useTranslation()
    const {projectsCreateStep} = useRoutesDefinition()

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
                    onSubmit={(command) => console.log(command)}
                    getFormActions={getActions}
                />
            </Section>
        </AppPage>
    )
}
