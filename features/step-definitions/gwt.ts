import { Given, When, Then, type DataTable } from '@cucumber/cucumber'
import { Ensure, equals } from '@serenity-js/assertions'
import { type Actor } from '@serenity-js/core'
import { General } from '../../serenity/general/abilities'

Given('{actor} navigates to {string}', { timeout: 70000 }, async (actor: Actor, url: string) => {
    await actor.attemptsTo(
        General.navigateToUrl(url),
    )
})

When('{pronoun} press {string}', { timeout: 70000 }, async (actor: Actor, element: string) => {
    await actor.attemptsTo(
        General.pressButton(element),
    )
})

Then('{pronoun} should hear the song playing', { timeout: 70000 }, async (actor: Actor) => {
    await actor.attemptsTo(
        General.assertAudioIsPlaying(),
    )
})

