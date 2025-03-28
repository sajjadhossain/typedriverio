import { contain, Ensure, equals, includes, isGreaterThan } from '@serenity-js/assertions'
import { type Answerable, Check, d, type QuestionAdapter, Task, Wait } from '@serenity-js/core'
import { By, Enter, ExecuteScript, isVisible, Key, Navigate, Page, PageElement, PageElements, Press, Text, Click, Attribute } from '@serenity-js/web'

export class General {
    static navigateToUrl = (url: string) =>
        Task.where('#actor navigates to url',
            Navigate.to(url),
            Ensure.that(
                Page.current().url().href,
                includes(url),
            )
        )
    static pressButton = (element: string) =>
        Task.where('#actor presses button',
            Click.on(PageElement.located(By.id(element))),
        )

    static assertAudioIsPlaying = () => 
        Task.where('#actor asserts audio is playing',
            Ensure.that(
                Attribute.called('src').of(PageElement.located(By.id('play'))),
                includes('floppy_disk_drive.png')
            )
        )
}