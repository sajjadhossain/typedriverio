import { Given, When, Then, type DataTable } from '@cucumber/cucumber'
import { Ensure, equals } from '@serenity-js/assertions'
import { type Actor } from '@serenity-js/core'
import { General } from '../../serenity/general/abilities'

Given('{actor} navigates to {string}', { timeout: 70000 }, async (actor: Actor, url: string) => {
    await actor.attemptsTo(
        General.navigateToUrl(url),
    )
})