import { Given, When, Then, type DataTable } from '@cucumber/cucumber'
import { Ensure, equals } from '@serenity-js/assertions'
import { type Actor } from '@serenity-js/core'
import { actorCalled, Duration, Wait } from '@serenity-js/core'
import { General } from '../../serenity/general/abilities'

Given('{actor} navigates to {string}', { timeout: 70000 }, async (actor: Actor, url: string) => {
    await actor.attemptsTo(
        General.navigateToUrl(url),
    )
})

When('{pronoun} choose to login with Amplify', { timeout: 70000 }, async (actor: Actor) => {
    await actor.attemptsTo(
        General.pressButton('zocial-amplify'),
    )
})

When('{pronoun} press {string}', { timeout: 70000 }, async (actor: Actor, element: string) => {
    await actor.attemptsTo(
        General.pressButton(element),
    )
})

When('{pronoun} fill in {string} with {string}', { timeout: 70000 }, async (actor: Actor, string: string, string2: string) => {
    await actor.attemptsTo(
        General.fillsInInput(string, string2),
    )
})

Then('{pronoun} should hear the song playing', { timeout: 70000 }, async (actor: Actor) => {
    await actor.attemptsTo(
        General.assertAudioIsPlaying(),
    )
})

Then('{pronoun} should see {string}', { timeout: 70000 }, async (actor: Actor, assertion: string) => {
    await actor.attemptsTo(
        Wait.for(Duration.ofMilliseconds(20_000)),
        General.shouldSeeText(assertion),
    )
})
